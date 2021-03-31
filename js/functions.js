// Affirmations

var myArray = [
    "Ik ben dankbaar dat ik de beste product manager in de wereld ben - mijn vorige uitdagingen hebben mijn skills alleen versterkt <br><br><i>  zoals Peter van Hees</i>"
  ,
  "Elke dag heb ik de trots van Casteldefells Joris, met een bedrijf dat 20M omzet geneneert <br><br><i> zoals mezelf</i>"
  ,
  "Elke dag voel ik het vertrouwen toenemen: Ik hou mijn stakeholders bij de hand elke dag <br><br><i> zoals Michael van Flint</i>"
  ,
  "Ik hou mijn lichaam stil, ik ben bewust van mijn lichaam en de situatie<br><br><i> Zoals Prateek, Carl, Tom</i>"
  ,
  "Mijn ogen stralen energie uit, ik lach, ik adem diep - mijn geluk en relaxheid kan niet verstoord worden <br><br><i>  Zoals Tony Robbins, Zoals Mark Wiens die eten proeft</i>"
  ,
  "Ik kijk mensen in de ogen met een lach, en deel mijn blijheid en bewustheid<br><br><i> zoals de Israeli bij Simple</i>"
  ,
  "Ik speel met mensen, ik maak mopjes, en lach hard<br><br><i> zoals Arnaud</i>"
  ,
  "Ik maak mijn eigen rol<br><br><i> zoals de beste mesen bij Ford, zoals Tristan Walker</i>"
  ,
  "Ik voel me het beste wanneer ik hongerig ben, en fysiek getraind <br><br><i> zoals Pascal Maenhout</i>"
  ,
  "Ik krijg promotie binnen twee jaar, ik krijg de hoogste beoordeling op mijn eerste feedback <br><br><i> zoals mijn vader, zoals Annelies bij McKinsey</i>"
  ];

var randomItemArray = [];
var randomItem;
var randomItemNr;


document.querySelector(".btn-core").onclick = function(){
  if (myArray.length !== randomItemArray.length){
    randomItemNr = Math.floor(Math.random()*myArray.length);
    randomItem = myArray[randomItemNr];
    while (randomItemArray.includes(randomItemNr)){
      randomItemNr = Math.floor(Math.random()*myArray.length);
      randomItem = myArray[randomItemNr];
    }
    randomItemArray.push(randomItemNr);
  }
  else {
    alert("That's it!");
  }

  var ps = document.querySelector(".p-affirm");
  ps.innerHTML = randomItem;
}

// Mindfulpause

var myMpArray = [
  "Do I accept myself just as I am?",
  "Notice that I notice",
  "I'm spinning on a planet in the middle of empty space and time. This body is nearly 100% empty space. It's all relative.",
  "If not now, when?",
  "What, at this moment, is lacking?",
  "Is there joy, light- and playfulness in what I’m doing?",
  "Do I accept my body just as it is? ",
  "Is this body perfect for the goals I want to achieve? ",
  "The sounds of silence, sounds come up, and die. The feeling of space around me. I focus on my inner field and become aware of the stillness",
  "Breath - expand your chest",
  "I can think, I can wait, I can fast ",
  "I am thankful for the things I will have achieved in the future",
  "Why is this important to me?",
  "Am I aware of my thoughts? Are these thoughts helping me?"
    ];

var randomItemMpArray = [];
var randomItemMp;
var randomItemMpNr;

document.querySelector(".btnMp").onclick = function(){
  if (myMpArray.length !== randomItemMpArray.length){
    randomItemMpNr = Math.floor(Math.random()*myMpArray.length);
    randomItemMp = myMpArray[randomItemMpNr];
    while (randomItemMpArray.includes(randomItemMpNr)){
      randomItemMpNr = Math.floor(Math.random()*myMpArray.length);
      randomItemMp = myMpArray[randomItemMpNr];
    }
    randomItemMpArray.push(randomItemMpNr);
  }
  else {
    alert("that's it!");
  }
  var psMp = document.querySelector(".p-mp");
  psMp.innerHTML = randomItemMp;
}

// Inspiration
var myInsArray = [
  "Ik denk aan alle goede dingen die kunnen gebeuren, ik schrijf alle goede dingen die kunnen gebeuren op.",
  "Ik loop door Chaeng Wattana en ik besef dat ik mij nergens iets van moet aantrekken. Wat er ook op mijn pad komt, ik kan het aan.",
  "Playfulness, ik bulderlach er om.",
  "Over exact een jaar, hoe belangrijk is dit? En wanneer ik 70 jaar ben?",
  "Ben ik dankbaar dat ik deze taak in de toekomst tot een goed einde gebracht heb?",
  "Accepteer ik de huidige situatie?",
  "Ik doe 5 diepe ademhalingen, 5 lange ademhalingen",
  "Ik heb dit al 100 keer gedaan, ik weet hoe dit werkt.",
  "Zal ik het over vijf jaar herinneren wanneer ik actie genomen heb, of wanneer ik passief gebleven ben."
];

var randomItemInsArray = [];
var randomItemIns;
var randomItemInsNr;

$(".btn-insp").click(function(){

  if (myInsArray.length !== randomItemInsArray.length){

    randomItemInsNr = Math.floor(Math.random()*myInsArray.length);
    randomItemIns = myInsArray[randomItemInsNr];
    while (randomItemInsArray.includes(randomItemInsNr)){
      randomItemInsNr = Math.floor(Math.random()*myInsArray.length);
      randomItemIns = myInsArray[randomItemInsNr];
    }

    randomItemInsArray.push(randomItemInsNr);
  }
  else {
    alert("that's it!");
  }
  var psIns = document.querySelector(".inspiration-p");
  psIns.innerHTML = randomItemIns;})
