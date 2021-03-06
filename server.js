const express = require('express');
const bodyParser = require('body-parser');

const teamData = require("./data/teamList.js");

const allTeamsRoute = require('./routes/api/allTeams');
const teamRoute = require('./routes/api/team');
const playerRoute = require('./routes/api/player');
const playersRoute = require('./routes/api/players');

const app = express();

// Config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Config view engine
app.set('view engine', 'pug');

// Set static files to be served from public directory 
app.use('/static', express.static("public"));

// Use Routes
app.use("/api/player", playerRoute);
app.use("/api/allTeams", allTeamsRoute);
app.use("/api/team", teamRoute);
app.use("/api/players", playersRoute);

app.get('/', (req, res) => {
  res.redirect('/api/allTeams');
})

app.listen(process.env.PORT || 5000);