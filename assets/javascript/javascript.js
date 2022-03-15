// ! functions to get elements
const startButton = document.getElementById('start-btn');
const timer = document.getElementById('timeDisplay')
const viewHighscoresElement = document.getElementById('viewHighscores')
const questionContainerElement = document.getElementById('question-container')
const startingPageElement = document.getElementById('starting-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;




startButton.addEventListener('click', startGame)

// // ! start game function
// function startGame() {
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    // question.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsElement.appendChild(button)
    // })
}

// //  ! next question function
// function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//     questionContainerElement.innerText = question.question
// }

//  ! select answer function
function selectAnswer() {}

// ! View highscores function
function viewHighscores() {}

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
                numbers: 'all of the above',
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
                numbers: 'numbers',
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
                numbers: 'javascript',
                correct: false
            }
        ]
    },
]
// ! Quetions End