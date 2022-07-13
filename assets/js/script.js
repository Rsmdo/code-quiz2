// array to define questions
// Note: correct answer counts from 0-3
const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            'strings', 
            'booleans',
            'numbers',
            'alerts',

        ],
        correct: 3,
    },
    {
        question: 'The condition in an if / else statement is enclosed within ?',
        answers: [
            'parentheses',
            'curly', 
            'square brackets',
            'quotes',
        ],
        correct: 0,
    },
    {
        question: 'Arrays in JavaScript can be used to store ?',
        answers: [
            'Answer',
            'other arrays',
            'booleans',
            'All of the above',
        ],
        correct: 3,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            'Javascript',
            'console log',
            'terminal/bash',
            'for loops',
        ],
        correct: 1,
    }
]
//needed declarations 
const questionPage = document.querySelector('#question')
const currentTime = document.querySelector("#currentTime")
const finalScores = document.querySelector("#final-score")
//time left
let secondsLeft = 75

//for timer to start and change when button clicked 
document
    .querySelector('#startTimer')
    .addEventListener('click', function() {
        changePage('#question')
        createQuestion(0)
        secondsLeft = 75
        currentTime.innerText = '75'
    })