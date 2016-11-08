// BACK-END

// var newCards = [];
var randomNumber;
var dealtCards = [];
var randomTeam;

var teamBlue;
var teamRed;
// var team = new Team (INPUT, 0, 8 or 9, blue or red);


function Team(correct, remaining, color, active) {
  this.correct = correct;
  this.remaining = remaining;
  this.color = color;
  this.active = active;
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

function createTeams() {
  var correct = 0;
  var firstTeamRemainingCards = 9;
  var secondTeamRemainingCards = 8;
  var blue = "blue";
  var red = "red";
  var inactive = false;
  var active = true;
  var agent;

  randomTeam = Math.floor(Math.random() * 2);

  for (var i = 0; i < 2; i++)
  {

    if (randomTeam === 1)
    {
      agent = blue;
      teamBlue = new Team (correct, firstTeamRemainingCards, blue, active);
      teamRed = new Team (correct, secondTeamRemainingCards, red, inactive)
    }
    else
    {
      agent = red;
      teamBlue = new Team (correct, secondTeamRemainingCards, blue, inactive);
      teamRed = new Team (correct, firstTeamRemainingCards, red, active)
    }
  }
}

function switchActiveTeam() {
  // Function that determines which team
  // is currently active, then switches.
  if (teamBlue.active === true)
  {
    teamBlue.active = false;
    teamRed.active = true;
  }
  else if (teamRed.active === true)
  {
    teamRed.active = false;
    teamBlue.active = true;
  }
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

function firstTurn() {
  var teamColor = document.getElementById("turnIdentifier")
  if (randomTeam === 1) {
    $(teamColor).css("background-color", "blue");
  } else {
    $(teamColor).css("background-color", "red");
  };
};

function endTurn() {
  var teamColor = document.getElementById("turnIdentifier")
  if (teamBlue.active === true) {
    $(teamColor).css("background-color", "red");
  } else {
    $(teamColor).css("background-color", "blue");
  };
};

$(document).ready(function() {
  function layout() {
    for (var i = 0; i < 25; i ++) {
      var locationVariable = "#box" + (i + 1) + " h1";
      var gameLocation = "#gameboard " + locationVariable;
      var colorKey = "#spyboard " + "#box" + (i + 1);
      $(gameLocation).text(dealtCards[i].name);
      $(colorKey).addClass(dealtCards[i].color);
    }
  }

  $("button#start").click(function() {
    createTeams();
    firstTurn();
    dealCards();
    layout();
    $("button#start").toggle();
    $("#turnIdentifier").show();
    $(".bttn").show();
  });

  $("button#endturn").click(function() {
    endTurn();
    switchActiveTeam();
  });

  $("button#spyboardbutton").click(function () {
    $("#spyboard").toggle();
  });

  $("button#reset").click(function () {
    location.reload();
  });

  $("#box1").click(function(event) {
    $("#box1").css("background-color", dealtCards[0].color);
  });
  $("#box2").click(function(event) {
    $("#box2").css("background-color", dealtCards[1].color);
  });
  $("#box3").click(function(event) {
    $("#box3").css("background-color", dealtCards[2].color);
  });
  $("#box4").click(function(event) {
    $("#box4").css("background-color", dealtCards[3].color);
  });
  $("#box5").click(function(event) {
    $("#box5").css("background-color", dealtCards[4].color);
  });
  $("#box6").click(function(event) {
    $("#box6").css("background-color", dealtCards[5].color);
  });
  $("#box7").click(function(event) {
    $("#box7").css("background-color", dealtCards[6].color);
  });
  $("#box8").click(function(event) {
    $("#box8").css("background-color", dealtCards[7].color);
  });
  $("#box9").click(function(event) {
    $("#box9").css("background-color", dealtCards[8].color);
  });
  $("#box10").click(function(event) {
    $("#box10").css("background-color", dealtCards[9].color);
  });
  $("#box11").click(function(event) {
    $("#box11").css("background-color", dealtCards[10].color);
  });
  $("#box12").click(function(event) {
    $("#box12").css("background-color", dealtCards[11].color);
  });
  $("#box13").click(function(event) {
    $("#box13").css("background-color", dealtCards[12].color);
  });
  $("#box14").click(function(event) {
    $("#box14").css("background-color", dealtCards[13].color);
  });
  $("#box15").click(function(event) {
    $("#box15").css("background-color", dealtCards[14].color);
  });
  $("#box16").click(function(event) {
    $("#box16").css("background-color", dealtCards[15].color);
  });
  $("#box17").click(function(event) {
    $("#box17").css("background-color", dealtCards[16].color);
  });
  $("#box18").click(function(event) {
    $("#box18").css("background-color", dealtCards[17].color);
  });
  $("#box19").click(function(event) {
    $("#box19").css("background-color", dealtCards[18].color);
  });
  $("#box20").click(function(event) {
    $("#box20").css("background-color", dealtCards[19].color);
  });
  $("#box21").click(function(event) {
    $("#box21").css("background-color", dealtCards[20].color);
  });
  $("#box22").click(function(event) {
    $("#box22").css("background-color", dealtCards[21].color);
  });
  $("#box23").click(function(event) {
    $("#box23").css("background-color", dealtCards[22].color);
  });
  $("#box24").click(function(event) {
    $("#box24").css("background-color", dealtCards[23].color);
  });
  $("#box25").click(function(event) {
    $("#box25").css("background-color", dealtCards[24].color);
  });
  $("#box26").click(function(event) {
    $("#box26").css("background-color", dealtCards[25].color);
  });

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
