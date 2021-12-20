
// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------GLOBAL VARIABLES---------------------------------------------------------------
let nextButton = document.querySelector("button.next-btn");
let lastQuestionButton = document.querySelector("button.next-btn");
let resetButton = document.querySelector("button.reset-btn");
let score = 0;
let scoreCard = document.getElementById("score-card");
let time = document.getElementById('time');
let submit = document.getElementById("form-submit-button");
let gameQuestions = [
    {
        question: "What is JavaScript?",
        answer: [
            {
                text: 'A: Scripting Language',
                correct: true
            },
            {
                text: 'B: HyperText Markup Language',
                correct: false
            },
            {
                text: 'C: Scripting Language',
                correct: true
            },
            {
                text: 'D: HyperText Markup Language',
                correct: false
            }
        ]
    },
    {
        question: "What is an object in JavaScript?",
        answer: [
            {
                text: "A: Something that you throw",
                correct: false
            },
            {
                text: "B: All JavaScript values, except primitives, are objects.",
                correct: true
            },
            {
                text: "C: A block of code in a script",
                correct: false
            },
            {
                text: "D: All of JavaScript values, except primers, are objects.",
                correct: true
            }
        ]
    },
    {
        question: "What are higher order functions?",
        answer: [
            {
                text: "A higher order function runs out of time when executed",
                correct: true
            },
            {
                text: "functions that are placed higher in the program than others",
                correct: false
            },
            {
                text: "functions that have to return values higher than other function return values",
                correct: false
            },
            {
                text: "A higher order function is a function that takes a function as an argument, or returns a function",
                correct: true
            },

        ]
    }
];

// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------SET TIMER FOR QUIZ-------------------------------------------------------------
const setTimer = function () {
    // set timer limit
    let timerSeconds = 60;
    // save setInterval function to a variable
    let timer = setInterval(function () {
        // decrement timer
        timerSeconds--;
        // set element text content to timers current number
        time.innerHTML = timerSeconds;
        // write conditional for when the timer reaches 0
        if (timerSeconds === 0) {
            // clear timer so that numbers do not go into the negative
            clearInterval(timer);
            // alert user that the game has ended
            alert("Game Over");
            document.body.querySelector('button.start-btn').style.visibility = 'visible';
        }
        // set timer speed in milliseconds
    }, 1000);
};
// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Start Game On Button Click-----------------------------------------------------------
const startGame = function () {
    document.body.querySelector('button.start-btn').style.visibility = 'hidden';
    console.log('start game button clicked')
    // starts the set timer function
    setTimer();
    // show questions
    document.querySelector('h4.question').innerHTML = gameQuestions[0]['question'];
    document.querySelector('div.answer-buttons').innerHTML = gameQuestions[0]['answer'][0]['text'] + '<br>' + gameQuestions[0]['answer'][1]['text'] + '<br>' + gameQuestions[0]['answer'][2]['text'] + '<br>' + gameQuestions[0]['answer'][3]['text'];
    document.querySelector('form').style.visibility = 'visible';
    submit.onclick = (event) => {
        event.preventDefault()
        console.log('submit')
        const answer = document.getElementsByName('answer');
        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                console.log(answer[i].value);
                if (answer[i].value === 'A') {
                    alert('Correct!');
                    score = score + 1;
                    scoreCard.innerHTML = score;
                    next();
                } else {
                    alert('The correct answer was not chosen');
                    next();
                }
            }
        }
    }
};

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------SHOW NEXT QUESTION ON BUTTON CLICK-----------------------------------------------------

const next = () => {
    document.querySelector('h4.question').innerHTML = gameQuestions[1].question;
    document.querySelector('div.answer-buttons').innerHTML = gameQuestions[1]['answer'][0]['text'] + '<br>' + gameQuestions[1]['answer'][1]['text'] + '<br>' + gameQuestions[1]['answer'][2]['text'] + '<br>' + gameQuestions[1]['answer'][3]['text'];
    submit.onclick = (event) => {
        event.preventDefault()
        console.log('submit')
        const answer = document.getElementsByName('answer');
        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                console.log(answer[i].value);
                if (answer[i].value === 'B') {
                    alert('Correct!');
                    score = score + 1;
                    scoreCard.innerHTML = score;
                    lastQuestion();
                } else {
                    alert('The correct answer was not chosen');
                    lastQuestion();
                }
            }
        }
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------SHOW LAST QUESTION ON BUTTON CLICK-----------------------------------------------------
const lastQuestion = () => {
    document.querySelector('h4.question').innerHTML = gameQuestions[2].question;
    document.querySelector('div.answer-buttons').innerHTML = gameQuestions[2]['answer'][0]['text'] + '<br>' + gameQuestions[2]['answer'][1]['text'] + '<br>' + gameQuestions[2]['answer'][2]['text'] + '<br>' + gameQuestions[2]['answer'][3]['text'];
    submit.onclick = () => {
        let answer = document.getElementsByName('answer');
        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                if (answer[i].value === 'D') {
                    alert('Correct!')
                    scoreCard += score + 1;

                } else {
                    alert('Sorry, the correct answer was not chosen')
                }
            }
        }
        return document.querySelector('h4.question').innerHTML = score + 'is your final score';
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------RESET GAME WHEN RESET BUTTON IS CLICKED------------------------------------------------

resetButton.onclick = () => {
    document.querySelector('h4.question').innerHTML = gameQuestions[0]['question'];
    document.querySelector('div.answer-buttons').innerHTML = gameQuestions[0]['answer'][0]['text'] + '<br>' + gameQuestions[0]['answer'][1]['text'] + '<br>' + gameQuestions[0]['answer'][2]['text'] + '<br>' + gameQuestions[0]['answer'][3]['text'];
    document.querySelector('form').style.visibility = 'visible';
    submit.onclick = (event) => {
        event.preventDefault()
        console.log('submit')
        const answer = document.getElementsByName('answer');
        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                console.log(answer[i].value);
                if (answer[i].value === 'A') {
                    alert('Correct!');
                    score = score + 1;
                    scoreCard.innerHTML = score;
                    next();
                } else {
                    alert('The correct answer was not chosen');
                    next();
                }
            }
        }
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------DATA SUBMISSION----------------------------------------------------------------


// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------CODE REFERENCES---------------------------------------------------------------


// --------------------------------
// --------------Display Questions Function------------------

