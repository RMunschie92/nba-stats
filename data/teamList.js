const teamData = [
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596755/atlanta_u8o8nz.png",
    abbreviation: "atl",
    city: "Atlanta",
    name: "Hawks",
    conference: "Eastern",
    division: "Southeast",
    established: "1949"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530592566/celtics_fsbgjf.png",
    abbreviation: "bos",
    city: "Boston",
    name: "Celtics",
    conference: "Eastern",
    division: "Atlantic",
    established: "1946"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596747/brooklyn_nxrt0p.png",
    abbreviation: "bkn",
    city: "Brooklyn",
    name: "Nets",
    conference: "Eastern",
    division: "Atlantic",
    established: "1976"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596746/charlotte_tztluy.png",
    abbreviation: "cha",
    city: "Charlotte",
    name: "Hornets",
    conference: "Eastern",
    division: "Southeast",
    established: "1988"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/chicago_rwmo2g.png",
    abbreviation: "chi",
    city: "Chicago",
    name: "Bulls",
    conference: "Eastern",
    division: "Central",
    established: "1966"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596747/cleveland_cqybcy.png",
    abbreviation: "cle",
    city: "Cleveland",
    name: "Cavaliers",
    conference: "Eastern",
    division: "Central",
    established: "1970"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/dallas_x9b9vy.png",
    abbreviation: "dal",
    city: "Dallas",
    name: "Mavericks",
    conference: "Western",
    division: "Southwest",
    established: "1980"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531887480/new_denver_nuggets_logo_cb43ec.png",
    abbreviation: "den",
    city: "Denver",
    name: "Nuggets",
    conference: "Western",
    division: "Northwest",
    established: "1976"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/detroit_djf2vw.png",
    abbreviation: "det",
    city: "Detroit",
    name: "Pistons",
    conference: "Eastern",
    division: "Central",
    established: "1948"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/goldenstate_zhokiy.png",
    abbreviation: "gsw",
    city: "Golden State",
    name: "Warriors",
    conference: "Western",
    division: "Pacific",
    established: "1946"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888009/houston-rockets-logo_kavwl5.png",
    abbreviation: "hou",
    city: "Houston",
    name: "Rockets",
    conference: "Western",
    division: "Southwest",
    established: "1967"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/indiana_ogcnxp.png",
    abbreviation: "ind",
    city: "Indiana",
    name: "Pacers",
    conference: "Eastern",
    division: "Central",
    established: "1976"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531887557/new_clippers_logo_bs3pam.png",
    abbreviation: "lac",
    city: "LA",
    name: "Clippers",
    conference: "Western",
    division: "Pacific",
    established: "1970"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/losangeles_oi1rax.png",
    abbreviation: "lal",
    city: "Los Angeles",
    name: "Lakers",
    conference: "Western",
    division: "Pacific",
    established: "1948"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/memphis_ywhipg.png",
    abbreviation: "mem",
    city: "Memphis",
    name: "Grizzlies",
    conference: "Western",
    division: "Southwest",
    established: "1995"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888149/miami-heat-logo-transparent_t9nadr.png",
    abbreviation: "mia",
    city: "Miami",
    name: "Heat",
    conference: "Eastern",
    division: "Southeast",
    established: "1988"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/milwaukee_gjjdfi.png",
    abbreviation: "mil",
    city: "Milwaukee",
    name: "Bucks",
    conference: "Eastern",
    division: "Central",
    established: "1968"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/minnesota_dlbbt3.png",
    abbreviation: "min",
    city: "Minnesota",
    name: "Timberwolves",
    conference: "Western",
    division: "Northwest",
    established: "1989"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/neworleans_lx9gyj.png",
    abbreviation: "nop",
    city: "New Orleans",
    name: "Pelicans",
    conference: "Western",
    division: "Southwest",
    established: "2002"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/newyork_kg0b69.png",
    abbreviation: "nyk",
    city: "New York",
    name: "Knicks",
    conference: "Eastern",
    division: "Atlantic",
    established: "1946"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/okc_vez1ao.png",
    abbreviation: "okc",
    city: "Oklahoma City",
    name: "Thunder",
    conference: "Western",
    division: "Northwest",
    established: "1967"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/orlando_fefgii.png",
    abbreviation: "orl",
    city: "Orlando",
    name: "Magic",
    conference: "Eastern",
    division: "Southeast",
    established: "1989"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/philadelphia_yrpi63.png",
    abbreviation: "phi",
    city: "Philadelphia",
    name: "76ers",
    conference: "Eastern",
    division: "Atlantic",
    established: "1949"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/phoenix_hjpiub.png",
    abbreviation: "phx",
    city: "Phoenix",
    name: "Suns",
    conference: "Western",
    division: "Pacific",
    established: "1968"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888663/trailblazers_logo_shuasw.png",
    abbreviation: "por",
    city: "Portland",
    name: "Trailblazers",
    conference: "Western",
    division: "Northwest",
    established: "1970"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sacramento_faskyb.png",
    abbreviation: "sac",
    city: "Sacramento",
    name: "Kings",
    conference: "Western",
    division: "Pacific",
    established: "1948"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sanantonio_ngomaf.png",
    abbreviation: "sas",
    city: "San Antonio",
    name: "Spurs",
    conference: "Western",
    division: "Southwest",
    established: "1976"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/toronto_bxjri1.png",
    abbreviation: "tor",
    city: "Toronto",
    name: "Raptors",
    conference: "Eastern",
    division: "Atlantic",
    established: "1995"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531889039/utah_jazz_logo_zrwfri.png",
    abbreviation: "uta",
    city: "Utah",
    name: "Jazz",
    conference: "Western",
    division: "Northwest",
    established: "1974"
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530597819/washington_xyb7f5.png",
    abbreviation: "was",
    city: "Washington",
    name: "Wizards",
    conference: "Eastern",
    division: "Southeast",
    established: "1961"
  }
];    

module.exports = teamData;