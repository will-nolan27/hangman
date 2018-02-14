var userChoice = prompt("Guess a letter")
var guessed = []
var userPoint = 0
console.log(userPoint)

var guessCount = 0
console.log(guessCount);

var wins = 0
console.log(wins);

var losses = 0
console.log(losses);

var arrayWords = ["dads", "bats", "cats", "rats", "bags"];
console.log(arrayWords);

function gameBuild() {
  var metrics = ["Used Letters: ", "Score: ", "Bunk Guesses: ", "Wins: ", "Losses: ", "Puzzle: "];
  for (var i = 0; i < metrics.length; i += 1) {
    var div = document.createElement("div");
    div.className = "metricDisplay";
    div.innerHTML = metrics[i];
    document.body.appendChild(div);
  }
};
gameBuild();

function divL() {
  for (var i = 4; i <= 9; i++) {
    var intit = document.createElement("div");
    intit.className = "ld";
    intit.innerHTML = "";
    document.body.childNodes[i].appendChild(intit);
  };
}
divL();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (5))
};
(getRandomInt())
var selectWord = arrayWords[(getRandomInt())];

var blanksDisplay = "-".repeat(selectWord.length) ;



document.body.childNodes[4].childNodes[1].textContent = 
document.body.childNodes[4].childNodes[1].textContent.replace("",guessed);

document.body.childNodes[5].childNodes[1].textContent = 
document.body.childNodes[5].childNodes[1].textContent.replace("",userPoint);

document.body.childNodes[6].childNodes[1].textContent = 
document.body.childNodes[6].childNodes[1].textContent.replace("",guessCount);

document.body.childNodes[7].childNodes[1].textContent = 
document.body.childNodes[7].childNodes[1].textContent.replace("",wins);

document.body.childNodes[8].childNodes[1].textContent = 
document.body.childNodes[8].childNodes[1].textContent.replace("",losses);

document.body.childNodes[9].childNodes[1].textContent = 
document.body.childNodes[9].childNodes[1].textContent.replace("",blanksDisplay);


console.log(document.body.childNodes[9].childNodes[1].textContent);



if (/^[a-zA-Z]/.test(userChoice)) {  
  guessed.push(userChoice);
  document.body.childNodes[4].childNodes[1].textContent = 
  document.body.childNodes[4].childNodes[1].textContent.replace("",guessed);
     }
  // code

else {
  alert(false);
  --userPoint;
  document.body.childNodes[5].childNodes[1].textContent = 
document.body.childNodes[5].childNodes[1].textContent.replace("",userPoint);


}


//If user choiceValue”” = to “” in alphabetArrayTrue find alphabetArrayTrue indexOf userChoice
//If found in alphabetArray  change position;
//         |     Then Scan selectWord for userChoice;
//         |
//         |                if found in selectWord letter 
//         |                  mark user point
//         |                 +clear user guess input
//         |
//         |               Else not deduct point from userscore
//         |               +Add to guess count
//         |.              +clear user guess input
//         |
//         else not letter add to guess count
//
//
//
//       If guess count less than six continue
//       Else = to 6 add point to losses
//                  
//      If losses count is less than 6
//         + set guess count = 0
//         +reset alphabet display
//         +select new selectWord
//      Else game over