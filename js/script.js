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

var i = 0
var questions = [
    //5 questions
    {
        title: "What is the color of grass?",
        choices: ["green", "blue", "red", "yellow"],
        correct: "green"
    },
    {
        title: "What is the color of the sky?",
        choices: ["green", "blue", "red", "yellow"],
        correct: "blue"
    }
]

function startQuiz () {
    startPage.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class", "hide")
    startTimer()
    displayQuestion()
}

startButton.addEventListener("click", startQuiz)


function displayQuestion() {
    console.log(i)
    console.log(questions[i])
    questionTitle.textContent = questions[i].title
    choice1.textContent = questions[i].choices[0] 
    choice2.textContent = questions[i].choices[1] 
    choice3.textContent = questions[i].choices[2] 
    choice4.textContent = questions[i].choices[3]

    choice1.addEventListener("click", checkAnswer)
    choice2.addEventListener("click", checkAnswer)
    choice3.addEventListener("click", checkAnswer)
    choice4.addEventListener("click", checkAnswer)
    
    //reference question array
    //questions[i].title
    //event listener on click of one answer button,  check answer()
}

function checkAnswer(answer) {
    if (answer === questions[i].correct) {
        i++
        displayQuestion()
    } else {
        timeRemaining = timeRemaining - 10
        i++
        displayQuestion()
    }
    //this will check the answer
    //will need i++ to increment questions 
    //then call display question
}

function endQuiz () {
    //similar to startquiz where we add hide on to div class
    //score == timeRemaining
    
}
function startTimer() {
var time = setInterval(function () {
    if (timeRemaining > 0) {
        timer.textContent = "Time Remaining: " + timeRemaining
        timeRemaining--
    } else clearInterval(time)
    endQuiz()
}, 1000)
}

// for (i=0; i < questions.length; i++)
//     prompt(questions.question[i])
//     if (answer )