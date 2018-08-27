const express = require("express");
const router = express.Router();
const request = require("request");
const moment = require("moment");

const teamList = require("../../data/teamList.js");

const date = moment().format('YYYY/MM/DD').replace(/\//g,'');

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get('/:id', (req, res) => {
  let urls = [
    `https://api.mysportsfeeds.com/v2.0/pull/nba/players.json?team=${req.params.id}`, 
    `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/team_stats_totals.json?team=${req.params.id}`,
    `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/standings.json?team=${req.params.id}`
  ];
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let completedRequests = 0;
  let responses = [];
  let roster = [];
  let teamData;

  urls.forEach((url) => {
    let body = "";
    request.get({
      url: url,
      headers: { 
        "Authorization": auth 
      }
    })
    .on("error", err => {
      console.error("Error: ", err.message);
    })
    .on("response", response => {
      console.log("statusCode: ", response.statusCode);
    })
    .on("data", chunk => {
      body += chunk;
    })
    .on("end", () => {
      body = JSON.parse(body);
      responses.push(body);
      completedRequests++;

      // when both requests are complete
      if (completedRequests == urls.length) {

        let completedData = [];

        // loop through responses and push indices to completedData accordingly
        for (let i = 0; i < responses.length; i++) {
          if (responses[i].hasOwnProperty('teamStatsTotals')) {
            completedData[0] = responses[i];
          }
          else if (responses[i].hasOwnProperty('players')) {
            completedData[1] = responses[i]
          }
          else {
            completedData[2] = responses[i]
          }
        }

        let teamStats = completedData[0].teamStatsTotals[0].stats;
        let rawRosterData = completedData[1].players;
        let teamStandings = completedData[2].teams[0];

        // set teamData
        teamList.map(team => {
          if (team.id == req.params.id) {
            teamData = team;
          }
        });

        // push each player object into templateData if it has a jerseyNumber
        rawRosterData.map(player => {
          if (player.player.jerseyNumber !== null) {
            roster.push(player.player);
          }
        });

        return res.render("team", {
          teamStats: teamStats,
          roster: roster,
          standings: teamStandings,
          team: teamData
        });
      }      
    });
  })
})

module.exports = router;
