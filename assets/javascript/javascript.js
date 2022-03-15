// ! functions to get elements
const startbutton = document.getElementById('start-btn')

// ! start game function
function startGame() {

}

//  ! next question function
function setNextQuestion() {}

//  ! select answer function
function selectAnswer() {}


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