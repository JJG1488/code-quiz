
var highScore = document.querySelector("#view-highscores");
var timeEl = document.querySelector('#time');
var highScore = document.querySelector("#view-highscores");
var highScore = 0;
var correctScore = 0;






// --------------------------------------------------------------------------------
//                             GLOBAL VARIBLES     
// --------------------------------------------------------------------------------
// created a variable for the begin button in the html/ selected it and tied it to a variable
var startButton = document.querySelector('#start-btn');
// created a variable for the next button in the html/ selected it and tied it to a variable
var nextButton = document.querySelector('#next-btn');
// selected the question-container from the html
var questionButtons = document.querySelector('#question-container');
// created variable that stores question id from line 23 in html
var questionElement = document.querySelector('#question');
// created variable that stores answer-buttons id from line 25 in html
var answerButtons = document.querySelector('#answer-buttons');
// created variables for current question and the shuffled questions
var shuffledQuestions, currentQuestionIndex;
// created questions array, with multiple objects, with multiple arrays
var resetBtn = document.querySelector('#reset');
var questions = [
    {
        question: 'What is JavaScript?',
        answers: [
            {text: 'HyperText Markup Langauge', correct: false},
            {text: 'Scripting Language', correct: true},
        ]
    },
    {
        question: 'What is a function?',
        answers: [
            {text: 'Reusable Block Of Code', correct: true},
            {text: 'Nothing Useful', correct: false}
        ]
    },
    {
        question: 'What is an object in JavaScript?',
        answers: [
            {text: 'Water-like substance used for cooking', correct: false},
            {text: 'A way to communicate things and what they do in JavaScript', correct: true}
        ]
    },
    {
        question: 'What is an expressive function?',
        answers: [
            {text: 'A function stored in a variable', correct: true},
            {text: 'An integer that should be parsed', correct: false}
        ]
    },
    {
        question: 'Is JavaScript fun?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false}
        ]
    },
    {
        question: 'How do you declare a variable?',
        answers: [
            {text: 'var nameOfVariable = value', correct: true},
            {text: 'variable = true and/ or false', correct: false}
        ]
    }

]
// --------------------------------------------------------------------------------
//                             EVENT LISTENERS    
// --------------------------------------------------------------------------------
// added an eventlistener to the start button
startButton.addEventListener('click', startGame);
// added an eventlistener to the next button
nextButton.addEventListener('click', function() {
    // created a function that increments the current question by 1
    currentQuestionIndex++;
    // created a function calles setNextQuestion
    setNextQuestion();
});


// --------------------------------------------------------------------------------
//                             FUNCTIONS    
// --------------------------------------------------------------------------------

function saveHighscore() {
    var initials = initialsEl.value.trim();
    console.log(initials);
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []
  
  
    var userScore = {
      score: time,
      initials: initials,
  
    }
    highScores.push(userScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
  
    window.location.href = "./highscore.html";
  
  };
  
  
  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;
  
  // user clicks button to start quiz
  startBtn.onclick = start;
// created a function to start the game
function startGame() {
// sets a timer for the game 
    setTime();
    // logs that the startgame button works
    console.log('Started');
    // classList is used to add 'hide' to the start button
    // This "classList" property is useful to add, remove and toggle CSS classes on an element.
    startButton.classList.add('hide');
    // shuffles the questions
    shuffledQuestions = questions.sort(function(){
        Math.random() - .5;
    });
    // makes sure that the current question index starts at 0
    currentQuestionIndex = 0;
    if (currentQuestionIndex === questions.length){
        reset();

    };
    // removes the 'hide' property from the classList
    questionButtons.classList.remove('hide');
    // calls function that cycles the next question
    setNextQuestion()
    

}

// created a function that shows the next question
function setNextQuestion() {
// resets state before the next question is shown
    reset();
    // shows next question and passes in the shuffledQuestions @ current index
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
    
}

// created a function that shows the questions
function displayQuestion(question){
    // takes the question element that was selected and sets the inner text equal to question.question
    questionElement.innerText = question.question;
    // for the answers in the queastion array,create a button and set its innertext to the button
    question.answers.forEach(function(answer) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        // classList adds btn to the button
        button.classList.add('btn');
        // if the correct answer is true the correct answer from the dataset is true
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // added event listener to button
        button.addEventListener('click', selectAnswer)
        // appended button to the answerButtons
answerButtons.appendChild(button);
    })


}

function reset() {
    
    clear(document.body);
    nextButton.classList.add('hide');
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    
}


function selectAnswer(event) {
    var selectedButton = event.target;
    var correct = selectedButton.dataset.correct;
    status(document.body, correct);
    Array.from(answerButtons.children).forEach(function(button){
        status(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');

    } else {
        startButton.innerText = 'Restart';
        
        startButton.classList.remove('hide');
    }
    
    nextButton.classList.remove('hide');
}

function status(element, correct){
    clear(element);
    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }

}

// function to remove 
function clear(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
}

// write time function that counts down from one minute

// function that sets the time
function setTime() {
    var secondsLeft = 60;

    // sets the "setInterval" function to the "timerInterval" variable
    var timerInterval = setInterval(function() {
      // decrements seconds left
      secondsLeft--;
      // sets the text inside of the h1 header equal to the "secondsLeft" varible, along with some text
      timeEl.textContent = secondsLeft;
      // conditional for when the tomer reaches 0
      if(secondsLeft === 0) {
        // clearInterval clears a timer set with the setInterval method
        // to be able to use the clearInterval method, you must use a variable when creating the interval method
        clearInterval(timerInterval);
        reset();
        // calls the sendMessage function
    
      }
      // sets milliseconds 1000 = 1 second
    }, 1000);
  }

  function resetPage() {
      location.reload;
  }



