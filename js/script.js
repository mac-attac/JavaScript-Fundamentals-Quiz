//create variable array with questions in it
var score = 0
var timeRemaining = 60
var startPage = document.querySelector(".startpage")
var questionTitle = document.querySelector(".questiontitle")
var questionChoices = document.querySelector(".questionchoices")
var startButton = document.querySelector(".startbutton")
var questionsDiv = document.querySelector(".questions")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var timer = document.querySelector(".time-left")
var hallOfFame = document.querySelector(".hall-of-fame")
var highScorers = document.querySelector(".high-scorers")

var i = 0
var questions = [
    //5 questions
    {
        title: "Which of the following is not an HTML attribute?",
        choices: ["src", "header", "href", "class"],
        correct: "header"
    },
    {
        title: "What is used to store information in JavaScript?",
        choices: ["variable", "loop", "function", "method"],
        correct: "method"
    },
    {
        title: "How many parameters are needed for the setInterval() method?",
        choices: ["3", "10", "2", "5"],
        correct: "2"
    },
    {
        title: "The code that is executed in a function is contained within the:",
        choices: ["parentheses", "curly brackets","quotation marks","brackets"],
        correct: "curly brackets"
    },
    {
        title: "Which of these is not part of a for loop?",
        choices: ["counter", "condition", "iterator", "calculator"]
    }
]

function startQuiz () {
    startPage.setAttribute("class", "hide")
    //hide the startPage with CSS attribute
    questionsDiv.removeAttribute("class", "hide")
    // show questions div by removing hide attribute
    startTimer()
    //execute startTimer function
    displayQuestion(i)
    //execute displayQuestion()
}





function displayQuestion(i) {
    //if question index is less than length of questions,
    //display the text content of the questions[i]. title on page
    //display the text of the answer choices in button elements
    for (questions[i]; i < questions.length; i++) {
        questionTitle.textContent = questions[i].title
        choice1.textContent = questions[i].choices[0] 
        choice2.textContent = questions[i].choices[1] 
        choice3.textContent = questions[i].choices[2] 
        choice4.textContent = questions[i].choices[3]

        choice1.addEventListener("click", checkAnswer)
        choice2.addEventListener("click", checkAnswer)
        choice3.addEventListener("click", checkAnswer)
        choice4.addEventListener("click", checkAnswer)
       }
    } 


function checkAnswer(answer) {
    if (answer === questions.correct) {
        i++
        displayQuestion()
    } else {
        timeRemaining = timeRemaining - 10
        i++
        displayQuestion()
    } 
}              

function startTimer() {
    //start timer with setInterval
     var countdown = setInterval(function () {
         //while time is remaining, continue counting down
        if (timeRemaining > 0) {
            timer.textContent = "Time Remaining: " + timeRemaining;
            timeRemaining--
        }   if (timeRemaining === 0) { 
            clearInterval(countdown);
            timer.setAttribute("class", "hide")
            endQuiz();
        }
    }, 1000)
}


function endQuiz() {
    score === timeRemaining
    questionsDiv.setAttribute("class", "hide")
    hallOfFame.removeAttribute("class", "hide")
    alert("Your score was " + score + "!")
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
startButton.addEventListener("click", startQuiz)