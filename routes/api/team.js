const express = require("express");
const router = express.Router();
const request = require("request");
const moment = require("moment");

const teamList = require("../../data/teamList.js");

const date = moment().format('YYYY/MM/DD').replace(/\//g,'');

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get('/:teamName', (req, res) => {
  let urls = [
    `https://api.mysportsfeeds.com/v2.0/pull/nba/players.json?date=${date}&team=${req.params.teamName}`, 
    `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/team_stats_totals.json?team=${req.params.teamName}`
    // `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/standings.json`
  ];
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let completedRequests = 0;
  let responses = [];
  let roster = [];
  let teamName;

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

        console.log(responses);

        // reverse responses array if players is 0 index

        if (responses[0].hasOwnProperty('players')) {
          responses = responses.reverse();
        }
        let teamStats = responses[0].teamStatsTotals[0].stats;
        console.log(teamStats)
        let rawData = responses[1].players;

        // set teamData
        teamList.map(team => {
          if (team.abbreviation == req.params.teamName.toLowerCase()) {
            teamData = team;
          }
        });

        // push each player object into templateData if it has a jerseyNumber
        rawData.map(player => {
          if (player.player.jerseyNumber !== null) {
            roster.push(player.player);
          }
        });

        return res.render("team", {
          roster: roster,
          teamStats: teamStats,
          team: teamData
        });
      }      
    });
  })
})

module.exports = router;
