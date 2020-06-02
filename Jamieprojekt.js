party = [ 
{
parti: "Röda Tjurarna",
block: "Faze Clan",
min: 3,
max: 12,
ledare: "RedBull Tropical",
röster: 0,
},
{
parti: "Poggarna",
block: "Faze Clan",
min: 2,
max: 8,
ledare: "Poggers Fish",
röster: 0,
},
{
parti: "Fiskarna",
block: "Faze Clan",
min: 8,
max: 18,
ledare: "Fiske Båt",
röster: 0,
},
{
parti: "Discordianerna",
block: "Faze Clan",
min: 3,
max: 12,
ledare: "Big Marpin",
röster: 0,
},
{
parti: "Weebpartiet",
block: "Oljeblocket",
min: 3,
max: 6,
ledare: "Hatsune Miku",
röster: 0,
},
{
parti: "Teknokraterna",
block: "Oljeblocket",
min: 12,
max: 22,
ledare: "Mr. Bionicle",
röster: 0,
},
{
parti: "Airpodspartiet",
block: "Oljeblocket",
min: 12,
max: 18,
ledare: "Tim Apple",
röster: 0,
},
{
parti: "Katolska Kyrkan",
block: "Inget Block",
min: 20,
max: 34,
ledare: "Jesus Kristus",
röster: 0,
}
]

let totalRöster = 0;

function räknaRöster(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("");

for (let i = 0; i < party.length; i++) {

  party[i].röster += räknaRöster(party[i].min, party[i].max);
  totalRöster += party[i].röster;
}

for (let i = 0; i < party.length; i++) {
  let röstProcent = (party[i].röster / totalRöster) * 100;
  let rounded = röstProcent.toFixed(2);
  console.log(
    "Antal människor som röstade på " + party[i].parti + ": " + party[i].röster + ", eller i procent " + rounded + "%"
  );
}

console.log();