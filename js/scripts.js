// BACK-END
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

var newCards = [];
var randomNumber;
var team = new Team (INPUT, 0, 8 or 9, blue or red)


function Team(name, correct, remaining, color) {
  this.name: name;
  this.correct: correct;
  this.remaining: remaining;
  this.color: color;
}

function Card (name, revealed, color, location) {
  this.name: name;
  this.revealed: revealed;
  this.color: color;
  this.location: location;
}




function randomCards(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

var cardColors = ["blue","red","bystander","assassin"];

var color = function colorAssignment() {
  randomNumber = Math.floor(Math.random() * 4);
  if (0 <= randomNumber && randomNumber <1) {
  return "blue";
  } else if (1 <= randomNumber && randomNumber <2) {
  return "red";
  } else if (2 <= randomNumber && randomNumber <3) {
  return "bystander";
  } else if (3 <= randomNumber && randomNumber <4) {
  return "assassin";
  }
}

function boardGenerator() {
  newCards = randomCards(cards);
  var revealed = false;

  for (var i = 0; i < 25; i ++) {
    Card (newCards[i], revealed, color, location);

    $("#box"+i).push(newCards[i]);
  }
}










// FRONT-END



$("board#board").show();
$("board#board").hide();

boardGenerator();
$("card#board").show();


input field for team name
click on blue or red color
then submit






spymaster object ()
board object
