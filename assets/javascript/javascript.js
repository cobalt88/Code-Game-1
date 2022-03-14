// ! variables for my elements
var questionEl = document.getElementById('question')
var answersEl = document.getElementById('answers')
var timerEl = document.getElementById('timer')
var btnEl = document.getElementById('btn')

// * questions array
const questionPool = [{
        'question': 'place question here',
        'answers': ['A', 'B', 'C', 'D'],
        'correctChoice': 3
    },
    {
        'question': 'place question here',
        'answers': ['A', 'B', 'C', 'D'],
        'correctChoice': 1
    },
    {
        'question': 'place question here',
        'answers': ['A', 'B', 'C', 'D'],
        'correctChoice': 2
    },
    {
        'question': 'place question here',
        'answers': ['A', 'B', 'C', 'D'],
        'correctChoice': 0
    },
    {
        'question': 'place question here',
        'answers': ['A', 'B', 'C', 'D'],
        'correctChoice': 1
    },
]

function startGame() {
    btnEl.addEventListener("click", myQuestions =>
        myQuestions.preventDefault(),
        displayMyQuestions()
    );
}


startGame()