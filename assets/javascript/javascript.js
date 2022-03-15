// ! functions to get elements
var backButton = document.getElementById('back-btn');
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var subButton = document.getElementById('sub-btn');
var clearButton = document.getElementById('clear-btn');
var timer = document.getElementById('timeDisplay')
var viewHighscoresElement = document.getElementById('viewHighscore')
var questionContainerElement = document.getElementById('question-container')
var startingPageElement = document.getElementById('starting-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var highscoresContainerElement = document.getElementById('highscore-container')
var finishedContainerElement = document.getElementById('finished-container')
var shuffledQuestions, currentQuestionIndex




startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// ! start game function
function startGame() {
    startButton.classList.add('hide')
    startingPageElement.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//  ! next question function
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
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
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
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
backButton.addEventListener('click', returnbackbutton)

function viewHighscores() {
    startButton.classList.add('hide')
    startingPageElement.classList.add('hide')
    viewHighscoresElement.classList.remove('hide')
    highscoresContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    backButton.classList.remove('hide')
    clearButton.classList.remove('hide')
    resetState()
}

function returnbackbutton() {
    startButton.classList.remove('hide')
    startingPageElement.classList.remove('hide')
    viewHighscoresElement.classList.remove('hide')
    highscoresContainerElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
    backButton.classList.add('hide')
    clearButton.classList.add('hide')
    resetState()
}

// ! get scores function 
function getInitialsPage() {
    startingPageElement.classList.add('hide')
    viewHighscoresElement.classList.remove('hide')
    highscoresContainerElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
    backButton.classList.add('hide')
    clearButton.classList.add('hide')
    finishedContainerElement.classList.remove('hide')
    subButton.classList.remove('hide')

}




// ! 

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
                numbers: 'numbers',
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
                numbers: 'square brackets',
                correct: false
            }
        ]
    },
    // {
    //     question: 'Arrays in Javascript can be used to store_____.',
    //     answers: [{
    //             text: 'numbers and strings',
    //             correct: false
    //         },
    //         {
    //             text: 'other arrays',
    //             correct: false
    //         },
    //         {
    //             text: 'booleans',
    //             correct: false
    //         },
    //         {
    //             numbers: 'all of the above',
    //             correct: true
    //         }
    //     ]
    // },
    // {
    //     question: 'String values must be enclosed within ____ when being assigned to variables.',
    //     answers: [{
    //             text: 'commas',
    //             correct: false
    //         },
    //         {
    //             text: 'quotes',
    //             correct: true
    //         },
    //         {
    //             text: 'brackets',
    //             correct: false
    //         },
    //         {
    //             numbers: 'numbers',
    //             correct: false
    //         }
    //     ]
    // },
    // {
    //     question: 'A very useful tool used during development and debugging that prints content to the debugger is ____',
    //     answers: [{
    //             text: 'console.log()',
    //             correct: true
    //         },
    //         {
    //             text: 'terminal',
    //             correct: false
    //         },
    //         {
    //             text: 'for loops',
    //             correct: false
    //         },
    //         {
    //             numbers: 'javascript',
    //             correct: false
    //         }
    //     ]
    // },
]
// ! Quetions End

// // ! timer function
// function countdown() {
//     var startingtimer = 10;

//     var testtime = setInterval(function () {
//         console.log(testtime)
//         timer.innerHTML = startingtimer
//         if (startingtimer > 0) {
//             --startingtimer;
//         } else {
//             clearInterval(testtime)
//         }
//     }, 1000)
// }
// console.log(timer)