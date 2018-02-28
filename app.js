function populate(){
  if (quiz.isEnded()) {
    showScores();
  } else {
    var theElement = $("#question");
    theElement.empty();
    theElement.append(quiz.getQuestionIndex().text);

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var theElement = $("#choice" + i);
      theElement.empty();
      theElement.append(choices[i]);
      //guess("#btn" + i, choices[i]);
    }
  }
};

$("button").on("click", function(){
  console.log('in here3');
  var guess = $(this).text();
  console.log(guess);
  quiz.guess(guess);
  populate();
});


/**function guess(id, guess) {
  var button = $(id);
   console.log("in here");
  button.onclick = function() {
	  console.log('in here3');
    quiz.guess(guess);
    populate();
  }
}**/

function showScores() {
  var gameOverHTML = "<h1> Result </h1>";
 	  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var theElement = $("#quiz");
  theElement.append(gameOverHTML);
}

var questions = [
  new Question(
    "What SNES game was ported from japan in 1994?",
    ["Mother II", "Legend of Mana", "Secret of Gaia", "Harvest Moon"],
    "Mother II"
  ),
  new Question(
    "Which final fantasy debuted in 1997?",
    [
      "Final Fantasy VII",
      "Final Fantasy Tactics",
      "Final Fantasy V",
      "Final Fantasy VIII"
    ],
    "Final Fantasy VII"
  ),

  new Question(
    "Which of the following was an Easter Egg from 'Halo: Combat Evolved Anniversary Edition'?",
    [
      "Troll Meme In Pillar of Autumn Message board",
      "Grunt headshots make screaming noise",
      "Elites hugged each other at end",
      "Chief curses if his gun is jammed"
    ],
    "Troll Meme In Pillar of Autumn Message board"
  ),
  new Question(
    "What do you get from the secret gnome house in year 1 of Harvest Moon?",
    ["Golden Hoe", "Golden Axe", "Silver Shovel", "Golden Sprinkler"],
    "Golden Hoe"
  ),
  new Question(
    "How many flutes do you need to skip to work 8 from world 1 in Super Mario Brothers 3?",
    ["1", "2", "3", "5"],
    "2"
  ),
  new Question(
    "Who is Link's Nemesis?",
    ["Ganon", "Bowser", "Sephiroth", "The Jarl"],
    "Ganon"
  )
];

var quiz = new Quiz(questions);

populate();
