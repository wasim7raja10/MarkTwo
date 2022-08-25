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
    question: "What is my name? ",
    answer: "Wasim Raja"
  },
  {
    question: "Where do I live currently? ",
    answer: "Hyderabad"
  },
  {
    question: "What did I study in college? ",
    answer: "CSE"
  },
  {
    question: "Do I like to play computer/mobile games? ",
    answer: "No"
  },
  {
    question: "Am I a nerd? ",
    answer: "Yes"
  },
  {
    question: "Do I like to play Chess? ",
    answer: "Yes"
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
  console.log("Lets see how much you know me.\n")
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
  const answer = readlineSync.question(currentQuestion.question);
  const isRight = answer === currentQuestion.answer
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