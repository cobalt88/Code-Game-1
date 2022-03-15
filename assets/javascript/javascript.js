// ! variables for my elements
var highscore = document.getElementById('highscore')
var timerEl = document.getElementById('timer')
var introEl = document.getElementById('intro')
var btnEl = document.getElementById('btn')
var quizEl = document.getElementById('quiz')
var questionEl = document.getElementById('question')
var scoreIndicatorEl = document.getElementById('scoreIndicator')
var finishEl = document.getElementById('finish')
var recordsEl = document.getElementById('finish')
var highScoresEl = document.getElementById('highScores')
var resetEl = document.getElementById('reset')
var clearScores = document.getElementById('clearScores')
var answersEl = document.getElementsById('answersList')

// * questions array
const questionsArray = [{
        'question': 'String values must be enclosed within _____ when assigned to variables.',
        // holds the answer choices in an array
        'answer': ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        //  selects the correct answer based on position
        'correct': 2
    },
    {
        'question': 'Commonly used data types DO NOT include:',
        'answer': ['alerts', 'numbers', 'strings', 'booleans'],
        'correct': 0
    },
    {
        'question': 'The condition in an if/else statement is enclosed within _____',
        'answer': ['quotes', 'curly brackets', 'square brackets', 'parenthesis'],
        'correct': 3
    },
    {
        'question': 'Which tag is used to identify the keywards describing the site?',
        'answer': ['text', 'http-equiv', 'content', 'name'],
        'correct': 2
    },
    {
        'question': 'What tag element will display a line across the screen?',
        'answer': ['br', 'a', 'hr', 'line'],
        'correct': 2
    }
]

function startQuiz() {
    for (i = 0; i < 4; i++) {
        let button = document.createElement("button")
        button.innerHTML = answersEl[0].answer[i]
        btnEl.appendChild(button);
    }
}

btnEl.addEventListener("click", startQuiz);