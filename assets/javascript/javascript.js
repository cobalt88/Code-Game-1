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

// * questions array
const questions = [{
        'question': 'String values must be enclosed within _____ when assigned to variables.',
        // holds the answer choices in an array
        'answers': ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        //  selects the correct answer based on position
        'correct': 2
    },
    {
        'question': 'Commonly used data types DO NOT include:',
        'answers': ['alerts', 'numbers', 'strings', 'booleans'],
        'correct': 0
    },
    {
        'question': 'The condition in an if/else statement is enclosed within _____',
        'answers': ['quotes', 'curly brackets', 'square brackets', 'parenthesis'],
        'correct': 3
    },
    {
        'question': 'Which tag is used to identify the keywards describing the site?',
        'answers': ['text', 'http-equiv', 'content', 'name'],
        'correct': 2
    },
    {
        'question': 'What tag element will display a line across the screen?',
        'answers': ['br', 'a', 'hr', 'line'],
        'correct': 2
    }
]

function changeQuestion() {
    questionEl.innerText = questionsArray[0].question;
}

btnEl.addEventListener("click", changeQuestion);