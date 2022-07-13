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
// function to update timer 
function updateSecondsLeft() {
    // decreases by 1 
    secondsLeft = Math.max(0, secondsLeft - 1)
    currentTime.textContent = secondsLeft
    finalScores.textContent = secondsLeft
}
// setting the interval to 1000 which is 1 seconds
setInterval(function() {
    if (questionPage.style.display === 'block') {
        updateSecondsLeft()
    }
}, 1000);
//storeing the pages needed into one array so easier to toggle
const pages = [
    document.querySelector('#final-prompt'),
    document.querySelector('#start-prompt'),
    questionPage,
    document.querySelector('#highscores')
]
//for timer to start and change when button clicked 
document.querySelector('#startTimer').addEventListener('click', function() {
        changePage('#question')
        createQuestion(0)
        secondsLeft = 75
        currentTime.innerText = '75'
    })

function createQuestion(index) {
    document.querySelector('#question-text').innerText = questions[index].question
    //select answers element to display 
    const answers = document.querySelector('#answers')
        //using map function to for new array creation for every element 
    answers.innerHTML = questions[index].answers
        .map(function(answer, i) {
            const value = questions[index].correct === i
            return '<button class="btn" value="' + value + '">'+ (i + 1) + '. ' + answer+ '</button>'
        })
        .join('')
    document .querySelectorAll('#answers button')
    //each cluck will display correct or incorrect 
    //if incorrect then time is deducted
    //questions will keep going aslong as there is questions in array 
        .forEach(function(answerButton) {
            answerButton.addEventListener('click', function(e) {
                const resultEl = document.querySelector('#answer-result')
                resultEl.style.display = 'block'
                setTimeout(function() {
                    resultEl.style.display = 'none'
                }, 700)
                if (e.target.value === 'true') {
                    resultEl.innerText = 'Correct!'
                } else {
                    resultEl.innerText = 'Wrong!'
                    secondsLeft -= 15
                    updateSecondsLeft()
                }
                if (index < questions.length - 1) {
                    createQuestion(index + 1)
                } else {
                    changePage('#final-prompt')
                }
            })
        })
}
//show hightscores 
//gets from local storage, splits and displays line by line 
function showHighscoresPage() {
    localStorage.getItem('highscores') || ''
    const highscoresListEl = document.querySelector('#highscores-list')
    const highscores = (localStorage.getItem('highscores') || '').split(',')
    let elList = ''
    for (let i = 1; i < highscores.length; i++) {
        elList += '<div>' + i + '. ' + highscores[i] + '</div>'
    }
    changePage('#highscores')
    highscoresListEl.innerHTML = elList
}