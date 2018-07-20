const express = require("express");
const router = express.Router();
const request = require("request");

const password = "MYSPORTSFEEDS";
const apiKey = "73a08190-f41f-4bda-becd-af5c5a";

router.get('/', (req, res) => {

  let url = `https://api.mysportsfeeds.com/v2.0/pull/nba/2017-2018-regular/player_stats_totals.json`;
  let auth = "Basic " + Buffer.from(apiKey + ":" + password).toString("base64");
  let body = '';
  
  request.get({
    url: url,
    headers: {
      "Authorization" : auth
    }
  }).
  on('error', err => {
    console.error("Error", err.message);
  })
  .on('response', response => {
    console.log("statusCode", response.statusCode);
  })
  .on('data', chunk => {
    body += chunk;
  })
  .on('end', () => {
    let data = JSON.parse(body);
    let players = data.playerStatsTotals;

    // Point Totals
    let ptsTotals = [];
    players.forEach(player => {
      ptsTotals.push(player);
    });

    ptsTotals.sort((a, b) => {
      return b.stats.offense.pts - a.stats.offense.pts;
    });

    // Points per game 
    let ptsPerGame = [];
    players.forEach(player => {
      ptsPerGame.push(player);
    });

    ptsPerGame.sort((a, b) => {
      return b.stats.offense.ptsPerGame - a.stats.offense.ptsPerGame;
    });

    // Rebounds per game
    let reboundsPerGame = [];
    players.forEach(player => {
      reboundsPerGame.push(player);
    });

    reboundsPerGame.sort((a, b) => {
      return b.stats.rebounds.rebPerGame - a.stats.rebounds.rebPerGame;
    });

    // Assists per game
    let astPerGame = [];
    players.forEach(player => {
      astPerGame.push(player);
    });

    astPerGame.sort((a, b) => {
      return b.stats.offense.astPerGame - a.stats.offense.astPerGame;
    });

    // Blocks per game
    let blkPerGame = [];
    players.forEach(player => {
      blkPerGame.push(player);
    });

    blkPerGame.sort((a, b) => {
      return b.stats.defense.blkPerGame - a.stats.defense.blkPerGame;
    })

    // Steals per game 
    let stlPerGame = [];
    players.forEach(player => {
      stlPerGame.push(player);
    });

    stlPerGame.sort((a, b) => {
      return b.stats.defense.stlPerGame - a.stats.defense.stlPerGame;
    })

    // Field Goal Percentage 
    let fieldGoalPct = [];
    players.forEach(player => {
      // At least 300 made FGs to meet statistical minimum
      if (player.stats.fieldGoals.fgMade >= 300) {
        fieldGoalPct.push(player);
      }
    });

    fieldGoalPct.sort((a, b) => {
      return b.stats.fieldGoals.fgPct - a.stats.fieldGoals.fgPct;
    })

    // Three pointers made 
    let threePtMade = [];
    players.forEach(player => {
      threePtMade.push(player);
    });

    threePtMade.sort((a, b) => {
      return b.stats.fieldGoals.fg3PtMade - a.stats.fieldGoals.fg3PtMade;
    })

    // Three Pointers Percentage 
    let threePtPct = [];
    players.forEach(player => {
      // At least 82 made three-point FGs to meet statistical minimum
      if (player.stats.fieldGoals.fg3PtMade >= 82) {
        threePtPct.push(player);
      }
    });

    threePtPct.sort((a, b) => {
      return b.stats.fieldGoals.fg3PtPct - a.stats.fieldGoals.fg3PtPct;
    })

    return res.render('players', {
      ptsTotals: ptsTotals,
      ptsPerGame: ptsPerGame,
      reboundsPerGame: reboundsPerGame,
      astPerGame: astPerGame,
      blkPerGame: blkPerGame,
      stlPerGame: stlPerGame,
      fieldGoalPct: fieldGoalPct,
      threePtMade: threePtMade,
      threePtPct: threePtPct
    });
  })
})

module.exports = router