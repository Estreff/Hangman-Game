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
var teamsGenerated = [];


letters.addEventListener('click', function(event) {

    guess = event.target.innerHTML;
    var letterClass = event.srcElement;
    letterClass.setAttribute("class", "disabled");
    console.log(letterClass);



    console.log(guess);

    letterGuess.push(guess);
    console.log(letterGuess[letterGuess.length-1]); 


            
      for (var i = 0; i < splitAnswer.length; i++) {

        if (letterGuess[letterGuess.length-1] === splitAnswer[i]) {



          trueFalse = true;

          indexes.push(i);
    
          var underScoreSplit = underScore.split("");
          
            for (var j = 0; j < indexes.length; j++) {
              underScoreSplit[indexes[j]] = letterGuess[letterGuess.length-1];

              indexes = [];

              underScore = underScoreSplit.join("");
            }

          hold.textContent = underScore;
        
        }   
      }


      
      console.log(trueFalse);

      if (trueFalse === false) {      
          lives--;
        console.log(lives);
        // letterClass.add('inactive');
        myLives.textContent = lives; 
        hangman();
        

      } else {
        // letterClass = guess.setAttribute('class', 'test');
        trueFalse = false;
      
        
      }

      setTimeout(function() {
        winLoss ();
      }, 600);

});

function winLoss() {
  if (answer.toLowerCase() === underScore.toLowerCase()) {
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('winLossComment').textContent = "Congratulations, you sure know your Sports Teams!!"; 
    wins ++;
    console.log(wins);
    win.textContent = wins;
  } else if (lives === 0) {
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('winLossComment').innerHTML = "Study up and play again!!<br />" + "Answer:  " + answer;
    losses ++;
    console.log(losses);
    loss.textContent = losses;
    
  }
}

//  generate Hint associated with Answer selected

btnHint.addEventListener('click', function(event) {

    clues = event.target.innerHTML;
    document.getElementById('clue').style.color = "red";
    clue.textContent = category[teamsGenerated[teamsGenerated.length-1]][1];
    if(lives > 0) {
      lives--;
      btnHint.setAttribute("class", "disabled");
    }
    myLives.textContent = lives; 

    
    hangman();

    setTimeout(function() {
        winLoss ();
      }, 600);
    
});


//  Hangman function to draw in Canvas

function hangman () {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

// Ground
  if (lives === 9) {   
          
        ctx.beginPath();
        ctx.moveTo(280, 140);
        ctx.lineTo(10, 140);
        ctx.stroke();
      }

// Vertical
  if (lives === 8) {   
        
      ctx.beginPath();
      ctx.moveTo(25,140);
      ctx.lineTo(25,15);
      ctx.stroke();
    }

// Horizontal 
  if (lives === 7) {   
        
      ctx.beginPath();
      ctx.moveTo(25,15);
      ctx.lineTo(80,15);
      ctx.stroke();
    }

// Rope
  if (lives === 6) {   
      
      ctx.beginPath();
      ctx.moveTo(80,15);
      ctx.lineTo(80,30);
      ctx.stroke();
  }
// Head
  if (lives === 5) {   
      
      ctx.beginPath();
      ctx.arc(80,40,10,0,2*Math.PI);
      ctx.stroke();
  }

// Body
  if (lives === 4) {   
      
      ctx.beginPath();
      ctx.moveTo(80,50);
      ctx.lineTo(80,90);
      ctx.stroke();
  }

// Right Arm
  if (lives === 3) {   
      
      ctx.beginPath();
      ctx.moveTo(80,65);
      ctx.lineTo(90,75);
      ctx.lineTo(100,60);
      ctx.stroke();
  }

// Left Arm
  if (lives === 2) {   
      
      ctx.beginPath();
      ctx.moveTo(80,65);
      ctx.lineTo(70,75);
      ctx.lineTo(60,60);
      ctx.stroke();
  }

// Right Leg
  if (lives === 1) {   
      
      ctx.beginPath();
      ctx.moveTo(80,90);
      ctx.lineTo(90,105);
      ctx.lineTo(90,120);
      ctx.stroke();
  }

//  Left leg
  if (lives === 0) {   
      
      ctx.beginPath();
      ctx.moveTo(80,90);
      ctx.lineTo(70,105);
      ctx.lineTo(70,120);
      ctx.stroke();
  }





}



createList(alphabet, list);
document.getElementById("myLives").innerHTML = lives;  
document.getElementById("win").innerHTML = wins;  
document.getElementById("loss").innerHTML = losses;  

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



var category = nflTeams;
randomNumber = Math.round(Math.random() * category.length);
teamsGenerated.push(randomNumber);



var answer =  category[teamsGenerated[teamsGenerated.length-1]][0];
      console.log(answer);



      underScore = answer.replace(/[a-zA-Z]/g, "_");
      console.log(underScore);

      splitAnswer = answer.toLowerCase().split("");
      console.log(splitAnswer);

      hold.textContent =underScore;


  
});

function newGame() {
lives =10;  
mylives.textContent = lives;
buttons.setAttribute("class", "");
// var removeDisabled = document.querySelectorAll(".disabled");
// removeDisabled.removeClass();


document.getElementById('popup').style.visibility = "hidden";

}

// function resetGame() {


// myLives.textContent = 0;  
// win.textContent = 0;  
// loss.textContent = 0;  

// document.getElementById('popup').style.visibility = "hidden";


// }



