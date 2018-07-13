const express = require("express");
const router = express.Router();
const request = require("request");
const https = require("https");

const teamData = require('../../data/teamList.js')

router.get("/", (req, res) => {
  res.render('allTeams', { teamData });
});

module.exports = router;