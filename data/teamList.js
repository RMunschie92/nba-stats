const teamData = [
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596755/atlanta_u8o8nz.png",
    abbreviation: "atl",
    city: "Atlanta",
    name: "Hawks",
    conference: "Eastern",
    division: "Southeast"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530592566/celtics_fsbgjf.png",
    abbreviation: "bos",
    city: "Boston",
    name: "Celtics",
    conference: "Eastern",
    division: "Atlantic"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596747/brooklyn_nxrt0p.png",
    abbreviation: "bkn",
    city: "Brooklyn",
    name: "Nets",
    conference: "Eastern",
    division: "Atlantic"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596746/charlotte_tztluy.png",
    abbreviation: "cha",
    city: "Charlotte",
    name: "Hornets",
    conference: "Southeast",
    division: "Eastern"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/chicago_rwmo2g.png",
    abbreviation: "chi",
    city: "Chicago",
    name: "Bulls",
    conference: "Central",
    division: "Eastern"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596747/cleveland_cqybcy.png",
    abbreviation: "cle",
    city: "Cleveland",
    name: "Cavaliers",
    conference: "Central",
    division: "Eastern"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/dallas_x9b9vy.png",
    abbreviation: "dal",
    city: "Dallas",
    name: "Mavericks",
    conference: "Southwest",
    division: "Western"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596746/denver_kzhyyy.png",
    abbreviation: "den",
    city: "Denver",
    name: "Nuggets",
    conference: "NOrthwest",
    division: "Western"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/detroit_djf2vw.png",
    abbreviation: "det",
    city: "Detroit",
    name: "Pistons",
    conference: "Central",
    division: "Eastern"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/goldenstate_zhokiy.png",
    abbreviation: "gsw",
    city: "Golden State",
    name: "Warriors",
    conference: "Western",
    division: "Pacific"
  },
  {
    image: "https://www.vexels.com/vectors/preview/131100/houston-rockets-logo",
    abbreviation: "hou",
    city: "Houston",
    name: "Rockets",
    conference: "Western",
    division: "Southwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/indiana_ogcnxp.png",
    abbreviation: "ind",
    city: "Indiana",
    name: "Pacers",
    conference: "Central",
    division: "Eastern"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596725/la_mo9qfh.png",
    abbreviation: "lac",
    city: "LA",
    name: "Clippers",
    conference: "Western",
    division: "Pacific"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/losangeles_oi1rax.png",
    abbreviation: "lal",
    city: "Los Angeles",
    name: "Lakers",
    conference: "Western",
    division: "Pacific"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/memphis_ywhipg.png",
    abbreviation: "mem",
    city: "Memphis",
    name: "Grizzlies",
    conference: "Western",
    division: "Southwest"
  },
  {
    image: "https://www.vexels.com/vectors/preview/131475/miami-heat-logo",
    abbreviation: "mia",
    city: "Miami",
    name: "Heat",
    conference: "Eastern",
    division: "Southeast"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/milwaukee_gjjdfi.png",
    abbreviation: "mil",
    city: "Milwaukee",
    name: "Bucks",
    conference: "Eastern",
    division: "Central"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/minnesota_dlbbt3.png",
    abbreviation: "min",
    city: "Minnesota",
    name: "Timberwolves",
    conference: "Western",
    division: "Northwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/neworleans_lx9gyj.png",
    abbreviation: "nop",
    city: "New Orleans",
    name: "Pelicans",
    conference: "Western",
    division: "Southwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/newyork_kg0b69.png",
    abbreviation: "nyk",
    city: "New York",
    name: "Knicks",
    conference: "Eastern",
    division: "Atlantic"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/okc_vez1ao.png",
    abbreviation: "okc",
    city: "Oklahoma City",
    name: "Thunder",
    conference: "Western",
    division: "Northwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/orlando_fefgii.png",
    abbreviation: "orl",
    city: "Orlando",
    name: "Magic",
    conference: "Eastern",
    division: "Southeast"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/philadelphia_yrpi63.png",
    abbreviation: "phi",
    city: "Philadelphia",
    name: "76ers",
    conference: "Eastern",
    division: "Atlantic"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/phoenix_hjpiub.png",
    abbreviation: "phx",
    city: "Phoenix",
    name: "Suns",
    conference: "Western",
    division: "Pacific"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/portland_fpobjz.png",
    abbreviation: "por",
    city: "Portland",
    name: "Trailblazers",
    conference: "Western",
    division: "Northwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sacramento_faskyb.png",
    abbreviation: "sac",
    city: "Sacramento",
    name: "Kings",
    conference: "Western",
    division: "Pacific"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sanantonio_ngomaf.png",
    abbreviation: "sas",
    city: "San Antonio",
    name: "Spurs",
    conference: "Western",
    division: "Southwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/toronto_bxjri1.png",
    abbreviation: "tor",
    city: "Toronto",
    name: "Raptors",
    conference: "Eastern",
    division: "Atlantic"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/utah_gzhrwy.png",
    abbreviation: "uta",
    city: "Utah",
    name: "Jazz",
    conference: "Western",
    division: "Northwest"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530597819/washington_xyb7f5.png",
    abbreviation: "was",
    city: "Washington",
    name: "Wizards",
    conference: "Eastern",
    division: "Southeast"
  }
];    

module.exports = teamData;