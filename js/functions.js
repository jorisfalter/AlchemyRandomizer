// Affirmations

var myArray = [
    "I'm thankful I'm the best product manager in the world - My previous challenges guide me to be the best PM in the world <br><br><i>  like Peter van Hees</i>"
  ,
  "I am as proud as Casteldeffels Joris every day, with a business with 20M in revenue <br><br><i> like myself</i>"
  ,
  "I feel the trust growing: I’m holding my stakeholders at the hand every day <br><br><i> like Michael from Flint</i>"
  ,
  "I'm thankful I am present, only living and concentrating on the now, keeping my body still, especially in meetings <br><br><i> like Prateek, Carl, Tom</i>"
  ,
  "I feel great and confident: My eyes are deliberate, and I smile, my chest full of air - I'm unmovable - my face only shows positive emotions - my happiness and relaxation can’t be disturbed <br><br><i>  like Tony Robbins, like Mark Wiens tasting food</i>"
  ,
  "I feel deliberate, I look people in the eyes with a smile <br><br><i> like that Israeli guy at Simple</i>"
  ,
  "I feel enthusiastic, I'm responsive in a playful way <br><br><i> like Arnaud</i>"
  ,
  "I am convinced I make my own space <br><br><i> like the best people at Ford, like Tristan Walker</i>"
  ,
  "I feel best when I’m hungry and physically exercised <br><br><i> like Vadym</i>"
  ,
  "I get promoted within two years, I get the highest performance rating on my first feedback <br><br><i> zoals mijn vader, zoals Annelies bij McKinsey</i>"
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
    alert(randomItemNr);
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
  "Am I aware of my thoughts? Are these thoughts helping me? "
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
    alert(randomItemMpNr);
  }
  var psMp = document.querySelector(".p-mp");
  psMp.innerHTML = randomItemMp;

}
