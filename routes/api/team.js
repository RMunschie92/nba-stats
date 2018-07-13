const express = require("express");
const router = express.Router();
const request = require("request");
const https = require("https");
const moment = require("moment");

const date = moment().format('YYYY/MM/DD').replace(/\//g,'');

// Initialize array to store data in through handler 
let templateData = [];

const username = "ryan_munsch";
const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get('/', (req, res) => {

  let body = "";
  let url = `https://api.mysportsfeeds.com/v2.0/pull/nba/players.json?date=${date}&team=bos`;
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");

  request
    .get({ url: url, headers: { Authorization: auth } })
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
      const data = JSON.parse(body);
      let rawData = data.leaguePlayers.players;
      if (templateData.length < 1) {
        rawData.map(player => {
          if (player.player.currentRosterStatus === "ROSTER") {
            templateData.push(player.player);
          }
        });
      }
      return res.render("team", { data: templateData });
    });
  
})

module.exports = router;
