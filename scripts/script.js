
// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------GLOBAL VARIABLES---------------------------------------------------------------
var nextButton = document.querySelector("button.next-btn");
let lastQuestionButton = document.querySelector("button.next-btn");
var resetButton = document.getElementById("reset-btn");
var questionContainer = document.getElementById("question-container");
var score = 0;
var scoreCard = document.getElementById("score-card");
var scoreDisplay = document.getElementById("view-score");
var userInput = document.getElementById("userInput");
var inputArray = [];
var time = document.getElementById('time');
var displayQuestion = document.querySelector("questionOne");
var submit = document.getElementById("form-submit-button");

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
        question: "What is an object?",
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
                text: "C: Something that you throw",
                correct: false
            },
            {
                text: "D: All JavaScript values, except primitives, are objects.",
                correct: true
            }
        ]
    },
    {
        question: "What are higher order functions?",
        answer: [
            {
                text: "A higher order function is a function that takes a function as an argument, or returns a function",
                correct: true
            },
            {
                text: "functions that are placed higher in the program than others",
                correct: false
            },
            {
                text: "A higher order function is a function that takes a function as an argument, or returns a function",
                correct: true
            },
            {
                text: "functions that are placed higher in the program than others",
                correct: false
            }
        ]
    }
];


// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------SET TIMER FOR QUIZ-------------------------------------------------------------
const setTimer = function () {
    // set timer limit
    let timerSeconds = 300000;
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
            // remove the classlist 'hidden' from the start button so that it can show once the game has eneded.
            // startButton.classList.remove('hidden');
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

};

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------SHOW NEXT QUESTION ON BUTTON CLICK-----------------------------------------------------

const next = () => {
   
        // create new element
        var newDiv = document.createElement("div");
        // create new element text
        // var newDivContent = document.createTextNode("Randomly Cycle Through Index Of Questions HERE");
        // appended text to element
        // newDiv.appendChild(newDivContent);
        // select target element
        var oldDiv = document.querySelector("div.question-container").childNodes[0];
        // replace old element with new
        oldDiv.replaceWith(newDiv, oldDiv);
        // hides next button (remove the hidden class when the reset button is pressed)
        // nextButton.classList.add("hidden");
        // newDiv.innerText = "";

        document.querySelector('h4.question').innerHTML = gameQuestions[1].question;
        document.querySelector('div.answer-buttons').innerHTML = gameQuestions[1]['answer'][0]['text'] + '<br>' + gameQuestions[1]['answer'][1]['text'] + '<br>' + gameQuestions[1]['answer'][2]['text'] + '<br>' + gameQuestions[1]['answer'][3]['text'];
       
    
}

submit.onclick = (event) => {
    event.preventDefault()
    console.log('submit')
    // console.log(submit.value)
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    const answer = document.getElementsByName('answer');
    for (let i = 0; i < answer.length; i++) {
        if(answer[i].checked) {
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

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------SHOW LAST QUESTION ON BUTTON CLICK-----------------------------------------------------
const lastQuestion = () => {
    // create new element
var newDiv = document.createElement("div");
// create new element text
// var newDivContent = document.createTextNode("Randomly Cycle Through Index Of Questions HERE");
// appended text to element
// newDiv.appendChild(newDivContent);
// select target element
var oldDiv = document.querySelector("div.question-container").childNodes[0];
// replace old element with new
oldDiv.replaceWith(newDiv, oldDiv);
// hides next button (remove the hidden class when the reset button is pressed)
// nextButton.classList.add("hidden");
// newDiv.innerText = "";
console.log('lsdjlksdj')

document.querySelector('h4.question').innerHTML = gameQuestions[2].question;
document.querySelector('div.answer-buttons').innerHTML = gameQuestions[2]['answer'][0]['text'] + '<br>' + gameQuestions[2]['answer'][1]['text'] + '<br>' + gameQuestions[2]['answer'][2]['text'] + '<br>' + gameQuestions[2]['answer'][3]['text'];

}
// const lastQuestion = lastQuestionButton.onclick = () => {
  
//         // create new element
//         var newDiv = document.createElement("div");
//         // create new element text
//         // var newDivContent = document.createTextNode("Randomly Cycle Through Index Of Questions HERE");
//         // appended text to element
//         // newDiv.appendChild(newDivContent);
//         // select target element
//         var oldDiv = document.querySelector("div.question-container").childNodes[0];
//         // replace old element with new
//         oldDiv.replaceWith(newDiv, oldDiv);
//         // hides next button (remove the hidden class when the reset button is pressed)
//         // nextButton.classList.add("hidden");
//         // newDiv.innerText = "";
//         console.log('lsdjlksdj')

//         document.querySelector('h4.question').innerHTML = gameQuestions[2].question;
//         document.querySelector('div.answer-buttons').innerHTML = gameQuestions[2]['answer'][0]['text'] + '<br>' + gameQuestions[2]['answer'][1]['text'] + '<br>' + gameQuestions[2]['answer'][2]['text'] + '<br>' + gameQuestions[2]['answer'][3]['text'];
    
// }

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------RESET GAME WHEN RESET BUTTON IS CLICKED------------------------------------------------

// var resetButtonClicked = resetButton.onclick = () => {
//     // make start button appear
//     startButton.classList.remove("hidden");
//     // restart the timer


// }

// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------DATA SUBMISSION----------------------------------------------------------------
// var form = document.querySelector("form");
// // var log = document.querySelector("#log");

// form.addEventListener("submit", function (event) {
//     console.log('submit button pressed');

//     event.preventDefault();
// }, false);
// var form = document.querySelector("form");
// // var log = document.querySelector("#log");

// form.addEventListener("submit", function (event) {
//     console.log('submit button pressed');
//     // var data = new FormData(form);
//     // var output = "";
//     // for (const entry of data) {
//     //     output = output + entry[0] + "=" + entry[1] + "\r";
//     // };
//     // log.innerText = output;
//     event.preventDefault();
// }, false);
// var form = document.querySelector("form");
// // var log = document.querySelector("#log");

// form.addEventListener("submit", function (event) {
//     console.log('submit button pressed');
//     console.log(event);
//     console.log(event.target[0].value);
//     console.log(this)
//     if(event.target[0].value == 'A') {
//         alert('Correct!')
//         score = score + 1;
//         next();
//     } else {
//         alert('Sorry')
//     }


//     event.preventDefault();
// }, false);
// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------CODE REFERENCES---------------------------------------------------------------


// --------------------------------
// --------------Display Questions Function------------------


// const first = function () {
//     let firstQuestion = " What is JavaScript?  A: Scripting Language  or B: HyperText Markup Language";
//     displayQuestion.append(firstQuestion);


//     submit.onclick = function () {
//         inputArray.push(userInput.value);
//         console.log(inputArray)
//         if (inputArray[0] === 'null' || inputArray[0] === 'undefined' || inputArray[0] == '' || inputArray[0] == ' ') {
//             alert("you must enter a value")
//             inputArray.pop();
//         }
//         if (inputArray[0] == 'a') {
//             score += 1;
//             scoreDisplay.innerText = score;
//             console.log(score);
//             alert("Scripting Language was the right answer!");
//             console.log(inputArray[0]);
//             displayQuestion.textContent = "";
//             userInput.value = "";

//         } else {

//             console.log(inputArray[0]);


//         }

//         second()

//         return;

//     }

// }



// const second = function () {


//     let secondQuestion = "What is an object? A: Something that you throw at someone or B: All things in javascript";
//     displayQuestion.append(secondQuestion);

//     submit.onclick = function () {
//         inputArray.push(userInput.value);
//         console.log(inputArray)
//         if (inputArray[1] === 'null' || inputArray[1] === 'undefined' || inputArray[1] == '' || inputArray[1] == ' ') {
//             alert("you must enter a value")
//             inputArray.pop();
//         }


//         if (inputArray[1] == 'a') {
//             score += 1;
//             scoreDisplay.innerText = score;
//             console.log(score);
//             alert("A was the correct answer!")
//             console.log(inputArray[1]);
//             displayQuestion.textContent = "";
//             userInput.value = "";


//         } else {
//             console.log(inputArray[1]);

//         }

//         third()
//         return;
//     }


// }

// const third = function () {
//     let thirdQuestion = "What are higher order functions? A: A higher order function is a function that takes a function as an argument, or returns a function... or B: functions that are placed higher in the program than others";
//     displayQuestion.append(thirdQuestion);

//     submit.onclick = function () {
//         inputArray.push(userInput.value);
//         console.log(inputArray)
//         if (inputArray[2] === 'null' || inputArray[2] === 'undefined' || inputArray[2] == '' || inputArray[2] == ' ') {
//             alert("you must enter a value")
//             inputArray.pop();
//         }


//         if (inputArray[2] == 'a') {
//             score += 1;
//             scoreDisplay.innerText = score;
//             console.log(score);
//             alert("A was the correct answer!")
//             console.log(inputArray[2]);
//             displayQuestion.textContent = "";
//             userInput.value = "";
//             alert("Your overall score is " + score);
//             time.innerText = "";


//         } else {
//             console.log(inputArray[2]);

//         }

//     }



// }







// const displayQuestions = function() {

//     // buttonOne.classList.remove('hide');
//     // buttonTwo.classList.remove('hide');

// for(let i = 0; i < gameQuestions.length; i++){
//     displayQuestion.innerText = gameQuestions[i].question;

// }


//     // buttonOne.innerText = gameQuestions[0].answer[0].text;
//     // buttonTwo.innerText = gameQuestions[0].answer[1].text;

//     // buttonOne.onclick = () => {
//     //     score += 1;
//     //     scoreDisplay.innerText = score;
//     //     console.log(score);


//     // }






// }




// <!-- // Immediately start session timer startSessionTimer(); -->
// <button onclick="startSessionTimer()">Start Timer</button>
// <button onclick="stopSessionTimer()">Stop Timer</button>

// var session;

// function startSessionTimer() {
// 	session = setTimeout(function(){ 
//     	alert("Session Expired"); 
//     }, 2000);
// }

// function stopSessionTimer() {
//     clearTimeout(session);
//     alert("Session Expiration Stopped"); 
// }




// ------------------------------ Way to solve this problem
// give user a text box under the question.
// give user suggestions next to question.
// have user enter answer in text box.
// once answer is given, apply toLower() on whatever the text string is
// push user answer to an array
// if user answer is equal to the correct answer for that question, increase the score then go to the next question
// if the user answer is not equal to the correct answer, go to the next question.