$(document).ready(function() {


    // Create Letter Selection 

function createList(items, parent){
  var ul = document.createElement('ul');
  parent.appendChild(ul);
  items.forEach(function generateList(item) {
    var li = document.createElement('li');
    ul.appendChild(li);
    if(Array.isArray(item)){
      createList(item, li);
    } else {
      li.innerHTML = item;
    }
  });
}

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var list = document.getElementById('letters');
var lives = 10;
var letterGuess = [];
var splitAnswer = [];
var underScore = [];
var revisedAnswer = [];
var indexes = [];
trueFalse = false;
var wins = 0;
var losses = 0;


buttons.addEventListener('click', function(event) {

    guess = event.target.innerHTML;
    
    console.log(guess);

    letterGuess.push(guess);
    console.log(letterGuess[letterGuess.length-1]); 


            
      for (var i = 0; i < splitAnswer.length; i++) {

        if (letterGuess[letterGuess.length-1] === splitAnswer[i]) {

          guess.className += "located";

          trueFalse = true;

          indexes.push(i);
    
          var underScoreSplit = underScore.split("");
          
            for (var j = 0; j < indexes.length; j++) {
              underScoreSplit[indexes[j]] = letterGuess[letterGuess.length-1];

              indexes = [];

              underScore = underScoreSplit.join("");
            }


          hold.textContent = underScore;
        
        } // else {}
      }
      
    

});







createList(alphabet, list);
document.getElementById("myLives").innerHTML = lives;  
document.getElementById("wins").innerHTML = wins;  
document.getElementById("losses").innerHTML = losses;  

   var nflTeams = [
  ["Arizona  Cardinals", "NFC West"],
  ["Atlanta  Falcons", "NFC South"],
  ["Baltimore  Ravens", "AFC North"],
  ["Buffalo  Bills", "AFC East"],
  ["Carolina  Panthers","NFC South"],
  ["Chicago  Bears", "NFC North"],
  ["Cincinnati  Bengals", "AFC North"],
  ["Cleveland  Browns", "AFC North"],
  ["Dallas  Cowboys", "NFC East"],
  ["Denver  Broncos", "AFC West"],
  ["Detroit  Lions", "NFC North"],
  ["Green Bay  Packers", "NFC North"],
  ["Houston  Texans", "AFC South"],
  ["Indianapolis  Colts", "AFC South"],
  ["Jacksonville  Jaguars", "AFC South"],
  ["Kansas  City  Chiefs", "AFC West"],
  ["Miami  Dolphins", "AFC East"],
  ["Minnesota  Vikings", "NFC North"],
  ["New  England  Patriots", "AFC East"],
  ["New  Orleans  Saints","NFC South"],
  ["New  York  Giants", "NFC East",],
  ["New  York  Jets", "AFC East"],
  ["Oakland  Raiders", "AFC West"],
  ["Philadelphia  Eagles", "NFC East"],
  ["Pittsburgh  Steelers", "AFC North"],
  ["Los Angeles  Chargers", "AFC West"],
  ["San Francisco  Forty  Niners", "NFC West"],
  ["Seattle  Seahawks", "NFC West"],
  ["Los  Angeles  Rams", "NFC West"],
  ["Tampa  Bay  Buccaneers", "NFC South"],
  ["Tennessee  Titans", "AFC South"],
  ["Washington  Redskins", "NFC East"]
];




var answer =  nflTeams[Math.round(Math.random() * nflTeams.length)][0];
      console.log(answer);

      underScore = answer.replace(/[a-zA-Z]/g, "_");
      console.log(underScore);

      splitAnswer = answer.toLowerCase().split("");
      console.log(splitAnswer);

      hold.textContent =underScore;
      console.log(nflTeams[0][1]); 

  
});