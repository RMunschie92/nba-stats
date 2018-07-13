const express = require('express');
const bodyParser = require('body-parser');

const teamData = require("./data/teamList.js");

const allTeamsRoute = require('./routes/api/allTeams');
const teamRoute = require('./routes/api/team');
const playerRoute = require('./routes/api/player');

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

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000, () => console.log('NBA Stats listening on port 3000! :)'));