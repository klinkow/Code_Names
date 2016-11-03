// BACK-END

// var newCards = [];
var randomNumber;
var dealtCards = [];
// var team = new Team (INPUT, 0, 8 or 9, blue or red);


function Team(name, correct, remaining, color) {
  this.name = name;
  this.correct = correct;
  this.remaining = remaining;
  this.color = color;
}

function Card (name, revealed, color, location) {
  this.name = name;
  this.revealed = revealed;
  this.color = color;
  this.location = location;
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }

  return array;
}

function dealCards(){
  var cards = ["wind","fire","earth","witch","ketchup","snow","trunk","bow","degree","atlantis",
  "vacuum","millionaire","day","battery","hawk","draft","ham","yard","chest","green",
  "pass","tablet","slip","kangaroo","strike","superhero","oil","worm","alps","agent",
  "buck","limousine","australia","deck","buffalo","ninja","olympus","genius","eagle","boom",
  "doctor","ball","drill","date","mercury","roulette","penguin","root","hospital","saturn",
  "mexico","air","eye","calf","press","spine","circle","bed","honey","horseshoe",
  "mouth","tap","block","france","fish","cotton","canada","scorpion","shakespeare","engine",
  "needle","shop","comic","mammoth","contract","march","head","litter","olive","grace",
  "egypt","theater","berry","soldier","wall","pants","torch","state","conductor","dog",
  "foot","new york","stadium","dragon","bark","thief","racket","beijing","pie","knight"];

  var cardColors = ["blue","blue","blue","blue","blue","blue","blue","blue",
  "red","red","red","red","red","red","red","red",
  "bystander","bystander","bystander","bystander","bystander","bystander","bystander",
  "assassin", "double agent"];

  var newCards = [];
  var revealed;
  var location;
  var cardName;

  newCards = shuffle(cards);
  newColors = shuffle(cardColors);

  for (var i = 0; i < 25; i ++) {
    cardName = newCards[i];
    revealed = false;
    color = newColors[i];
    location = "box" + (i + 1);

    dealtCards[i] = new Card (cardName, revealed, color, location);

    // newCards[i].push("#box"+i);
  }

}

// function startGame() {
//   dealCards();
// }

// FRONT-END

$(document).ready(function() {
  function layout() {
    for (var i = 0; i < 25; i ++) {
      var locationVariable = "#box" + (i + 1) + " h1";
      var gameLocation = "#gameboard " + locationVariable;
      var colorKey = "#spyboard " + "#box" + (i + 1);
      $(gameLocation).text(dealtCards[i].name);
      $(colorKey).addClass(dealtCards[i].color);
    }
  };

  $("button#start").click(function() {
    dealCards();
    layout();
  })
});


//
//
// $("board#board").show();
// $("board#board").hide();
//
// boardGenerator();
// $("card#board").show();
//
//
// input field for team name
// click on blue or red color
// then submit
//
//
//
//
//
//
// spymaster object ()
// board object
