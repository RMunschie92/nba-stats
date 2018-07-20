const express = require("express");
const router = express.Router();
const request = require('request');

const teamList = require("../../data/teamList.js");

const password = 'MYSPORTSFEEDS';
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get("/:id", (req, res) => {
  let teamName;
  let urls = [
    `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/player_stats_totals.json?player=${req.params.id}`, 
    `https://api.mysportsfeeds.com/v2.0/pull/nba/players.json?player=${req.params.id}`
  ];
  let auth = 'Basic ' + Buffer.from(apiKey + ':' + password).toString('base64');
  let completedRequests = 0;
  let responses = [];

  urls.forEach((url) => {
    let body = "";
    request.get({
      url: url,
      headers: {
        "Authorization": auth
      }
    })
    .on("error", err => {
      console.error('Error: ', err.message);
    })
    .on("response", response => {
      console.log("statusCode: ", response.statusCode);
    })
    .on("data", chunk => {
      body += chunk
    })
    .on("end", () => {
      body = JSON.parse(body);
      responses.push(body);
      completedRequests++;
      // when both requests are completed
      if (completedRequests == urls.length) {
        // reverse responses array if playerData is 0 index
        if (responses[0].hasOwnProperty('players')) {
          responses = responses.reverse();
        }
        let playerStats = responses[0].playerStatsTotals[0].stats;
        let playerData = responses[1].players[0].player;

        // get team name to send to view
        teamList.map(team => {
          if (team.abbreviation == playerData.currentTeam.abbreviation.toLowerCase()) {
            teamData = team;
            teamName = team.city + ' ' + team.name;
            teamLogo = team.image;
          }
        });

        return res.render("player", {
          playerStats: playerStats,
          playerData: playerData,
          teamData: teamData,
        });
      }
    })
  })
});





module.exports = router;