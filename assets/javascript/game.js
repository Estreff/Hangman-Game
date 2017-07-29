
window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;           // Array of topics
  var chosenCategory;       // Selected Category
  var getHint;              // Get Hint about Answer
  var word;                 // Selected Word (Answer)
  var guess;                // Guess
  var guesses;              // Stored Guesses
  var lives;                // Lives
  var counter;              // Count correct guesses
  var space;                // Number of spaces in word (Answer)

  // Get Elements

  var showLives = document.getElementById("myLives";)
  var show Category = document.getElementById("category");
  var getHint = doucment.getElementById("hint");
  var showClue = getElementById("clue");


    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');

      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
}

 function draw() {

  var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(95,50,40,0,2*Math.PI);
      ctx.stroke();
 }

 // Category: NFL Teams

 var nflTeams = [
  ["Arizona Cardinals", "NFC West"]
  ["Atlanta Falcons", "NFC South"],
  ["Baltimore Ravens", "AFC North"],
  ["Buffalo Bills", "AFC East"],
  ["Carolina Panthers","NFC South"],
  ["Chicago Bears", "NFC North"],
  ["Cincinnati Bengals", "AFC North"],
  ["Cleveland Browns", "AFC North"],
  ["Dallas Cowboys", "NFC East"],
  ["Denver Broncos", "AFC West"],
  ["Detroit Lions", "NFC North"],
  ["Green Bay Packers", "NFC North"],
  ["Houston Texans", "AFC South"],
  ["Indianapolis Colts", "AFC South"],
  ["Jacksonville Jaguars", "AFC South"],
  ["Kansas City Chiefs", "AFC West"],
  ["Miami Dolphins", "AFC East"],
  ["Minnesota Vikings", "NFC North"],
  ["New England Patriots", "AFC East"],
  ["New Orleans Saints","NFC South"],
  ["New York Giants", "NFC East"],
  ["New York Jets", "AFC East"],
  ["Oakland Raiders", "AFC West"],
  ["Philadelphia Eagles", "NFC East"],
  ["Pittsburgh Steelers", "AFC North"],
  ["San Diego Chargers", "AFC West"],
  ["San Francisco Forty Niners", "NFC West"],
  ["Seattle Seahawks", "NFC West"],
  ["St. Louis Rams", "NFC West"],
  ["Tampa Bay Buccaneers", "NFC South"],
  ["Tennessee Titans", "AFC South"],
  ["Washington Redskins", "NFC East"]
];  