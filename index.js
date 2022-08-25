const readlineSync = require('readline-sync');

// highscore
const highScore = [
  {
    name: "Saurabh",
    score: 2
  },
  {
    name: "Viresh",
    score: 1
  },
]

// question-answer
const questions = [
  {
    question: "In what house did the Sorting Hat almost put Harry? ",
    answer: "Slytherin",
    options: [
      "Slytherin",
      "Hufflepuff",
      "Ravenclaw" ,
    ]
  },
  {
    question: "What subject does Professor McGonagall teach? ",
    answer: "Transfiguration",
    options: [
      "Transfiguration",
      "History of Magic",
      "Defense Against the Dark Arts "
    ]
  },
  {
    question: "What position does Harry play on the Quidditch team? ",
    answer: "seeker",
    options: [
      "chaser",
      "keeper",
      "seeker "
    ]
  },
  {
    question: "Which of these is NOT an ingredient of Harry's wand? ",
    answer: "unicorn hair",
    options: [
      "phoenix feather",
      "holly",
      "unicorn hair",
    ]
  },
  {
    question: "What is FLUFFY? ",
    answer: "a three-headed dog",
    options: [
      "a threeheaded dog",
      "a snake",
      "an owl"
    ]
  },
  {
    question: "What dark wizard did Albus Dumbledore defeat in 1945? ",
    answer: "Grindelwald",
    options: [
      "Nicolas Flamel",
      "Grindelwald",
      "Lord Voldemort"
    ]
  },
  {
    question: "Which one of these is not a candy? ",
    answer: "Knuts",
    options: [
      "Bertie Botts Every Flavor Beans",
      "Chocolate Frogs",
      "Knuts"
    ]
  },
]

const currentPlayer = {
  name: '',
  score: 0
}

function quiz() {
  currentPlayer.name = welcome();
  currentPlayer.score = play(currentPlayer.score, questions);
  giveFinalScore(currentPlayer.score, currentPlayer.name)
}

// welcome
function welcome(userName) {
  userName = readlineSync.question("What is your Name? ")
  console.log(`Hey ${userName}, welcome to this Quiz`)
  console.log("Lets see how much you know about Harry Potter's world.\n")
  return userName;
}

// looping through questions
function play(currentScore, questions) {
  for(let i = 0; i < questions.length; i++) {
    const isRight = checkAnswer(questions[i]);
    if(isRight) {
      currentScore += 1;
      console.log("you are right.")
    } else {
      console.log("you are wrong.")
    }
    console.log("current score: ", currentScore, '\n')
  }
  return currentScore;
}

// game
function checkAnswer(currentQuestion) {
  const index = readlineSync.keyInSelect(currentQuestion.options, currentQuestion.question);
  const isRight = currentQuestion.options[index] === currentQuestion.answer
  return isRight
}

// total score
function giveFinalScore(totalScore, userName) {
  console.log(`${userName}'s total score : `, totalScore)
  if(isHighScore(totalScore)) {
    console.log("you made a high score. Congratulations. \n");
  }
  console.log("current high scores -> ");
  if(isHighScore(totalScore)) {
    console.log(userName, " : ", totalScore)
  }
  for(let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name, " : ", highScore[i].score)
  }
}

// compare with high score
function isHighScore(totalScore) {
  if(totalScore > highScore[0].score) {
    return true
  }
  return false
}

quiz()