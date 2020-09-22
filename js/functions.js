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

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

// alert( randomItem);


var ps = document.querySelector("p");
ps.innerHTML = randomItem;
