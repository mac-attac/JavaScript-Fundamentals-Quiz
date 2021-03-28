//create variable array with questions in it
var startPage = document.querySelector(".startpage");
var questionTitle = document.querySelector(".questionTitle");
var questionChoices = document.querySelector(".questionChoices");
var startButton = document.querySelector(".startbutton");
var questionsDiv = document.querySelector(".questions");
var correctOrIncorrect = document.querySelector("#correct-or-incorrect");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var hallOfFame = document.querySelector(".hall-of-fame");
var highScorers = document.querySelector(".high-scorers");
var timer = document.querySelector(".timer");

var timerInterval;
var score;
var timeRemaining = 60;
var questionIndex = 0;
var questions = [
  //5 questions
  {
    title: "Which of the following is not an HTML attribute?",
    choices: ["src", "header", "href", "class"],
    correct: "1",
  },
  {
    title: "What is used to store information in JavaScript?",
    choices: ["variable", "loop", "function", "method"],
    correct: "0",
  },
  {
    title: "How many parameters are needed for the setInterval() method?",
    choices: ["3", "10", "2", "5"],
    correct: "2",
  },
  {
    title: "The code that is executed in a function is contained within the:",
    choices: ["parentheses", "curly brackets", "quotation marks", "brackets"],
    correct: "1",
  },
  {
    title: "Which of these is not part of a for loop?",
    choices: ["counter", "condition", "iterator", "calculator"],
    correct: "3",
  },
];

function startQuiz() {
  startPage.style.display = "none";
  //hide the startPage with CSS attribute
  questionsDiv.style.display = "block";
  // show questions div by removing hide attribute
  startTimer();
  //execute startTimer function
  displayQuestion(questionIndex);
  //execute displayQuestion()
}

function displayQuestion(questionIndex) {
  //if question index is less than length of questions,
  //display the text content of the questions[i]. title on page
  //display the text of the answer choices in button elements
  (questionTitle.textContent = questions[questionIndex].title),
    (choice1.textContent = questions[questionIndex].choices[0]);
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {
  var answerChoice = this.getAttribute("data-choice");
  if (answerChoice === questions[questionIndex].correct) {
    correctOrIncorrect.textContent = "Correct!";
  } else {
    correctOrIncorrect.textContent = "Sorry, that's incorrect!";
    timeRemaining -= 10;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    displayQuestion(questionIndex);
  } else {
    endQuiz();
  }
}

function startTimer() {
  //start timer with setInterval
  timerInterval = setInterval(function () {
    //while time is remaining, continue counting down
    timeRemaining--;
    if (timeRemaining > 0) {
      timer.textContent = "Time Remaining: " + timeRemaining;
    } else {
      timer.setAttribute("class", "hide");
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  score === timeRemaining;
  questionsDiv.style.display = "none";
  hallOfFame.style.display = "block";
  alert("Your score was " + score + "!");
  // displayHOF()
}

// function displayHOF () {
//     score === timeRemaining
//     var highScorerInput = prompt("Please enter your initials:")
//     var highScore = {
//         initials: highScorerInput,
//         score: score,
//     }
//     highScoreStore = localStorage.setItem("high-score", JSON.stringify("highScore"))
//     var leaderBoard = localStorage.getItem(JSON.parse("highScoreStore"))
//     highScorers.textContent = leaderBoard
// }

//click on the start button which executes the startQuiz function
startButton.addEventListener("click", startQuiz);

choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);

hallOfFame.style.display = "none";
questionsDiv.style.display = "none";
