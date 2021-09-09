// when user clicks start button, a timer begins counting down from 60 {done}

// Question one appears on the screen {done}

// Button 1 and button 2 appears on screen {done}
// --What are the inputs? User clicks button.
// -- What happens when the user clicks a button? The score is updated
// -- What happens when after the score is updated? The next question appears

// When user answers question, the next question appears

// if user answers the question correctly, the score is incremented by 1 {done}

// if the user answers the question wrong, the score is not incremented by 1

// when the user reaches the last question, the score is calculated {done}

// alert the user with the score that they have received {done}



// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------GLOBAL VARIABLES---------------------------------------------------------------
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var resetButton = document.getElementById("reset-btn");
var questionContainer = document.getElementById("question-container")
var scoreCard = document.getElementById("score-card")
var scoreDisplay = document.getElementById("view-score");
var score = 0;
var userInput = document.getElementById("userInput");
var inputArray = [];
var time = document.getElementById("time");
var displayQuestion = document.getElementById("questionOne");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var submit = document.getElementById("submit");


// let gameQuestions = [
//     {
//         question: "What is JavaScript?",
//         answer: [
//             {
//                 text: 'Scripting Language',
//                 correct: true
//             },
//             {
//                 text: 'HyperText Markup Language',
//                 correct: false
//             }
//         ]
//     },
//     {
//         question: "What is an object?",
//         answer: [
//             {
//                 text: "Something that you throw",
//                 correct: false
//             },
//             {
//                 text: "All JavaScript values, except primitives, are objects.",
//                 correct: true
//             }
//         ]
//     },
//     {
//         question: "What are higher order functions?",
//         answer: [
//             {
//                 text: "A higher order function is a function that takes a function as an argument, or returns a function",
//                 correct: true
//             },
//             {
//                 text: "functions that are placed higher in the program than others",
//                 correct: false
//             }
//         ]
//     }
// ];

scoreCard.classList.add('hidden')
questionContainer.classList.add('hidden')
// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Start Game On Button Click-----------------------------------------------------------

startButton.onclick = function () {
    // starts the set timer function
    setTimer();
    // hides the start button so that the user cannot press it again and restart the timer(could hav disabled it until the timer ended)
    startButton.classList.add('hidden');
  
scoreCard.classList.remove('hidden')
questionContainer.classList.remove('hidden')


    first();

};


// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------SET TIMER FOR QUIZ-------------------------------------------------------------

const setTimer = function () {

    // set timer limit
    var timerSeconds = 60;
    // save setInterval function to a variable
    var timer = setInterval(function () {
        // decrement timer
        timerSeconds--;
        // set element text content to timers current number
        time.textContent = timerSeconds;
        // write conditional fo when the timer reaches 0
        if (timerSeconds === 0) {
            // clear timer so that numbers do not go into the negative
            clearInterval(timer);
            // alert user that the game has ended
            alert("Game Over");
            // remove the classlist 'hidden' from the start button so that it can show once the game has eneded.
            startButton.classList.remove('hidden');
        }


        // set timer speed in milliseconds
    }, 1000);

};

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------SHOW NEXT QUESTION ON BUTTON CLICK-----------------------------------------------------

// const next = nextButton.onclick = () => {
//     // // create new element
//     // var newDiv = document.createElement("div");
//     // // create new element text
//     // var newDivContent = document.createTextNode("Randomly Cycle Through Index Of Questions HERE");
//     // // appended text to element
//     // newDiv.appendChild(newDivContent);
//     // // select target element
//     // var oldDiv = document.getElementById("question-container").childNodes[0];
//     // // replace old element with new
//     // oldDiv.replaceWith(newDiv, oldDiv);
//     // // hides next button (remove the hidden class when the reset button is pressed)
//     // // nextButton.classList.add("hidden");
//     // // newDiv.innerText = "";

//     // displayQuestion.innerText = gameQuestions[1].question 



// }

// --------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------RESET GAME WHEN RESET BUTTON IS CLICKED------------------------------------------------

// var resetButtonClicked = resetButton.onclick = () => {
//     // make start button appear
//     startButton.classList.remove("hidden");
//     // restart the timer


// }


// --------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------CODE REFERENCES---------------------------------------------------------------


// --------------------------------
// --------------Display Questions Function------------------


const first = function () {
    let firstQuestion = " What is JavaScript?  A: Scripting Language  or B: HyperText Markup Language";
    displayQuestion.append(firstQuestion);


    submit.onclick = function () {
        inputArray.push(userInput.value);
        console.log(inputArray)
        if (inputArray[0] === 'null' || inputArray[0] === 'undefined' || inputArray[0] == '' || inputArray[0] == ' ') {
            alert("you must enter a value")
            inputArray.pop();
        }


        if (inputArray[0] == 'a') {
            score += 1;
            scoreDisplay.innerText = score;
            console.log(score);
            alert("Scripting Language was the right answer!");
            console.log(inputArray[0]);
            displayQuestion.textContent = "";
            userInput.value = "";

        } else {

            console.log(inputArray[0]);


        }

        second()

        return;

    }

}



const second = function () {


    let secondQuestion = "What is an object? A: Something that you throw at someone or B: All things in javascript";
    displayQuestion.append(secondQuestion);

    submit.onclick = function () {
        inputArray.push(userInput.value);
        console.log(inputArray)
        if (inputArray[1] === 'null' || inputArray[1] === 'undefined' || inputArray[1] == '' || inputArray[1] == ' ') {
            alert("you must enter a value")
            inputArray.pop();
        }


        if (inputArray[1] == 'a') {
            score += 1;
            scoreDisplay.innerText = score;
            console.log(score);
            alert("A was the correct answer!")
            console.log(inputArray[1]);
            displayQuestion.textContent = "";
            userInput.value = "";


        } else {
            console.log(inputArray[1]);

        }

        third()
        return;
    }

    
}

const third = function () {
    let thirdQuestion = "What are higher order functions? A: A higher order function is a function that takes a function as an argument, or returns a function... or B: functions that are placed higher in the program than others";
    displayQuestion.append(thirdQuestion);

    submit.onclick = function () {
        inputArray.push(userInput.value);
        console.log(inputArray)
        if (inputArray[2] === 'null' || inputArray[2] === 'undefined' || inputArray[2] == '' || inputArray[2] == ' ') {
            alert("you must enter a value")
            inputArray.pop();
        }


        if (inputArray[2] == 'a') {
            score += 1;
            scoreDisplay.innerText = score;
            console.log(score);
            alert("A was the correct answer!")
            console.log(inputArray[2]);
            displayQuestion.textContent = "";
            userInput.value = "";
            alert("Your overall score is " + score);
            time.innerText = "";


        } else {
            console.log(inputArray[2]);

        }

    }



}







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