// ! functions to get elements
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var subButton = document.getElementById('sub-btn');
var clearButton = document.getElementById('clear-btn');
var timer = document.getElementById('timeDisplay');
var viewHighscoresElement = document.getElementById('viewHighscore');
var questionContainerElement = document.getElementById('question-container');
var startingPageElement = document.getElementById('starting-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var highscoresContainerElement = document.getElementById('highscore-container');
var finishedContainerElement = document.getElementById('finished-container');
var scoresContainerElement = document.getElementById('scoresContainer')
var scoreDisplayElement = document.getElementById('scoreDisplay')
var timeText = document.getElementById("time");


var state = {
    element: {
        backButton: document.getElementById('back-btn')
    },
    quizState: {
        score: 0,
        timeRemaining: 60,
        timeInterval: null,
        shuffledQuestions: null,
        currentQuestionIndex: null
    }
}

// ! timer function
function countdown() {
    state.quizState.timeRemaining = 60;
    timer.textContent = state.quizState.timeRemaining;
    state.quizState.timeInterval = setInterval(function () {
        if (state.quizState.timeRemaining > 0) {
            state.quizState.timeRemaining--;
            timer.textContent = state.quizState.timeRemaining;
        } else {
            timer.textContent = (' ');
            clearInterval(state.quizState.timeInterval)
            getInitialsPage()
        }
    }, 1000)
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    state.quizState.currentQuestionIndex++
    setNextQuestion()
})

// ! start game function
function startGame() {
    startButton.classList.add('hide')
    startingPageElement.classList.add('hide')
    state.quizState.shuffledQuestions = questions.sort(() => Math.random() - .5)
    state.quizState.currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    timer.classList.remove('hide')
    timeText.classList.remove("hide");
    setNextQuestion();
    countdown();
}

//  ! next question function
function setNextQuestion() {
    resetState()
    showQuestion(state.quizState.shuffledQuestions[state.quizState.currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// ! reset function
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//  ! select answer function
function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    if (correct === undefined) {
        state.quizState.timeRemaining -= 10
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (state.quizState.shuffledQuestions.length > state.quizState.currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        getInitialsPage()
    }
}


//  !  function to display feedback
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// ! clear feedback 
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
// ! View highscores function
viewHighscoresElement.addEventListener('click', viewHighscores)
state.element.backButton.addEventListener('click', returnBackButton)


function viewHighscores() {
    startButton.classList.add('hide')
    startingPageElement.classList.add('hide')
    viewHighscoresElement.classList.add('hide')
    highscoresContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    state.element.backButton.classList.remove('hide');
    clearButton.classList.remove('hide');
    finishedContainerElement.classList.add('hide');
    subButton.classList.add('hide');
    timer.classList.add("hide");
    timeText.classList.add("hide");

    var totalScores = localStorage.getItem('yourScores') || "";
    var scoresArray = totalScores.split("|");
    scoresArray.forEach(userScore => {
        if (userScore != "") {
            var listItem = document.createElement("li")
            listItem.textContent = userScore;
            scoresContainerElement.appendChild(listItem);
        }
    })
    resetState()

}

function returnBackButton() {
    startButton.classList.remove('hide')
    startingPageElement.classList.remove('hide')
    viewHighscoresElement.classList.remove('hide')
    highscoresContainerElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
    state.element.backButton.classList.add('hide')
    clearButton.classList.add('hide')
    timeText.classList.remove("hide");
    resetState()
}


// ! get scores function 
// subButton.addEventListener('click', viewHighscores)

function getInitialsPage() {
    startingPageElement.classList.add('hide')
    viewHighscoresElement.classList.remove('hide')
    highscoresContainerElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
    state.element.backButton.classList.add('hide')
    clearButton.classList.add('hide')
    finishedContainerElement.classList.remove('hide')
    subButton.classList.remove('hide')
    scoreDisplayElement.textContent = state.quizState.timeRemaining
    clearInterval(state.quizState.timeInterval)
    timer.classList.add('hide')
    resetState()
}




// !  save scores
var scoreList = document.getElementById('scoresContainer')
// var totalScores = JSON.parse(localStorage.getItem('totalScores')) || []

subButton.onclick = function (e) {
    e.preventDefault()
    var initialsInput = document.getElementById("initials-Input").value
    var totalScores = localStorage.getItem('yourScores') || "";

    initialsInput += ` score: ${state.quizState.timeRemaining} |`;
    totalScores += initialsInput;
    localStorage.setItem("yourScores", totalScores);

    subButton.onclick = function (disable) {
        alert("Score saved to continue please press view Highscores")
    }
}

// ! clear high scores
clearButton.onclick = function (e) {
    e.preventDefault()
    localStorage.clear()
    scoreList.innerHTML = " "
}


// ! Questions start
const questions = [{
        question: 'Commonly used data types DO NOT include:______',
        answers: [{
                text: 'strings',
                correct: false
            },
            {
                text: 'booleans',
                correct: false
            },
            {
                text: 'alerts',
                correct: true
            },
            {
                text: 'numbers',
                correct: false
            }
        ]
    },
    {
        question: 'The condition in an if/Else statement is enclosed with_____.',
        answers: [{
                text: 'quotes',
                correct: false
            },
            {
                text: 'curly brackets',
                correct: false
            },
            {
                text: 'parenthesis',
                correct: true
            },
            {
                text: 'square brackets',
                correct: false
            }
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store_____.',
        answers: [{
                text: 'numbers and strings',
                correct: false
            },
            {
                text: 'other arrays',
                correct: false
            },
            {
                text: 'booleans',
                correct: false
            },
            {
                text: 'all of the above',
                correct: true
            }
        ]
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: [{
                text: 'commas',
                correct: false
            },
            {
                text: 'quotes',
                correct: true
            },
            {
                text: 'brackets',
                correct: false
            },
            {
                text: 'numbers',
                correct: false
            }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging that prints content to the debugger is ____',
        answers: [{
                text: 'console.log()',
                correct: true
            },
            {
                text: 'terminal',
                correct: false
            },
            {
                text: 'for loops',
                correct: false
            },
            {
                text: 'javascript',
                correct: false
            }
        ]
    }
]