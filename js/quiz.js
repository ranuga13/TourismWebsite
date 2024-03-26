// Get the menu button and the navbar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//Initialising variables to store answers and calculate total.
let currentQuiz = 0;
let score = 0;
let quizNumber = 1;
let numCorrect = 0;
let numWrong = 0;

//When "Start Quiz" button clicked by user hides the instructions and shows questions and timer
function start() {
  document.getElementById("quiz-info").style.display = "none";
  document.getElementById("mydiv").style.display = "block";
  document.getElementById("timer").style.display = "block";
}

function buildQuiz() {
  //An empty array to hold the HTML for the quiz
  const output = [];

  //Loop through each question in the array of questions
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //An empty array to hold the HTML for the answer choices
    const answers = [];

    // Loop through each answer choice for the current question
    for (letter in currentQuestion.answers) {
      // Generate HTML code for the current answer choice
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    //Add this question and its answers to the output
    output.push(
      `<div class="slide">
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join("")}</div>
      </div>`
    );
  });

  // Combine output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // get all the answer labels
    const answerLabels = answerContainer.querySelectorAll("label");

    answerLabels.forEach((answerLabel) => {
      // get the corresponding input element
      const input = answerLabel.querySelector("input");

      // check if the input element matches the user's answer
      if (input.value === userAnswer) {
        if (answerContainers === currentQuestion.correctAnswer) {
          answerLabel.style.color = "lightgreen";
        }
        // if the answer is correct, color the label green
        if (userAnswer === currentQuestion.correctAnswer) {
          answerLabel.style.color = "lightgreen";
          numCorrect++;
          score += 2;
        } else {
          // if the answer is wrong or blank, color the label red
          answerLabel.style.color = "red";
          score -= 1;
          numWrong++;
        }
      } else {
        // for all other answer labels, do not color them
        answerLabel.style.color = "";
      }

      if (input.value === currentQuestion.correctAnswer) {
        answerLabel.style.color = "lightgreen";
      }
    });
  });
}

//Function to show/hide buttons and slides based on the current slide being viewed
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

//Function to show the next slide in the quiz when the 'Next Question' button is pressed.
function showNextSlide() {
  showSlide(currentSlide + 1);
}

//Function to show the next slide in the quiz when the 'Previous Question' button is pressed.
function showPreviousSlide() {
  quizNumber--;
  document.getElementById(
    "quizNumber"
  ).innerHTML = `Question: ${quizNumber}/10`;

  showSlide(currentSlide - 1);
}

// Variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const showResultsButton = document.getElementById("showResults");
const submitButton = document.getElementById("submit");
const mydiv = document.getElementById("mydiv");

//Array of objects that contains a set of questions and their respective answers for a quiz
const myQuestions = [
  {
    question: "Which beach in Sri Lanka is famous for whale watching?",
    answers: {
      a: "Mirissa Beach",
      b: "Unawatuna Beach",
      c: "Hikkaduwa Beach",
      d: "Nilaveli Beach",
    },
    correctAnswer: "a",
  },
  {
    question: "Which city in Sri Lanka is known as the cultural capital?",
    answers: {
      a: "Kandy",
      b: "Colombo",
      c: "Galle",
      b: "Anuradhapura",
    },
    correctAnswer: "a",
  },
  {
    question: "Which city in Sri Lanka is famous for its tea plantations?",
    answers: {
      a: "Kandy",
      b: " Nuwara Eliya",
      c: "Ella",
      d: "Galle",
    },
    correctAnswer: "b",
  },
  {
    question: "Which is the largest natural lake in Sri Lanka?",
    answers: {
      a: "Bolgoda Lake",
      b: "Kandy Lake",
      c: "Beira Lake",
      d: "Maduru Oya Reservoir",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which beach in Sri Lanka is known for its beautiful coral reefs?",
    answers: {
      a: "Unawatuna Beach",
      b: "Hikkaduwa Beach",
      c: "Mirissa Beach",
      d: "Tangalle Beach",
    },
    correctAnswer: "b",
  },
  {
    question: "Which is the highest mountain peak in Sri Lanka?",
    answers: {
      a: "Adam's Peak",
      b: "Pidurutalagala",
      c: "Knuckles Mountain Range",
      d: "Horton Plains",
    },
    correctAnswer: "b",
  },
  {
    question: "Which famous Hindu temple in Sri Lanka is located in Jaffna?",
    answers: {
      a: "Koneswaram Temple",
      b: "Kathiresan Temple",
      c: "Nallur Kandaswamy Kovil",
      d: "Sri Muthumariamman Kovil",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the currency of Sri Lanka?",
    answers: {
      a: "Rupee",
      b: "Euro",
      c: "Dollar",
      d: "Yen",
    },
    correctAnswer: "a",
  },
  {
    question: "Which beach in Sri Lanka is famous for its surfing?",
    answers: {
      a: "Negombo",
      b: "Hikkaduwa",
      c: "Arugam Bay",
      d: "Unawatuna",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the most famous spice grown in Sri Lanka?",
    answers: {
      a: "Cinnamon",
      b: "Black pepper",
      c: "Nutmeg",
      d: "Cardamom",
    },
    correctAnswer: "a",
  },
];

//Starting the quiz
buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

//Function to show results
function displayResults() {
  document.getElementById(
    "mydiv"
  ).innerHTML = `<h2><strong>Congratulations, Quiz Completed!</strong></h2> 
  <h4 style="text-align: center;"> Questions: ${myQuestions.length} </h4>
  <h4 style="text-align: center;"> Correct Answers: ${numCorrect}</h4>
  <h4 style="text-align: center;"> Wrong Answers: ${numWrong}</h4>
  <h4 style="text-align: center;">Score: ${score}</h4>
  <h4 style="text-align: center;">You Took: ${timeElapsed} seconds </h4>
  <h3 id = "grade" style="text-align: center;">Excellent work!</h3>
  <button  id= "retry" onclick= "location.reload()">Retry</button>`;
  gradecolour();
}

//Function to change the colour based on the score
function gradecolour() {
  if (score <= 20 && score >= 15) {
    document.getElementById("grade").style.color = "green";
    document.getElementById("grade").innerHTML = "Excellent work! ";
  } else if (score <= 15 && score >= 10) {
    document.getElementById("grade").style.color = "yellow";
    document.getElementById("grade").innerHTML = "Outstanding! ";
  } else if (score <= 10 && score >= 5) {
    document.getElementById("grade").style.color = "light yellow";
    document.getElementById("grade").innerHTML = "Awesome! ";
  } else if (score <= 5 && score >= 0) {
    document.getElementById("grade").style.color = "orange";
    document.getElementById("grade").innerHTML = "Average! ";
  } else {
    document.getElementById("grade").style.color = "red";
    document.getElementById("grade").innerHTML = "Unsatisfactory! ";
  }
}

// Event listeners
submitButton.addEventListener("click", function handleClick() {
  showResultsButton.style.display = "block";
  showResults();
  stop();
  alert = null;

  // remove the event listener after the first click
  submitButton.removeEventListener("click", handleClick);
});

showResultsButton.addEventListener("click", () => {
  displayResults();
});

previousButton.addEventListener("click", showPreviousSlide);

document.getElementById(
  "quizNumber"
).textContent = `Question: ${quizNumber}/10`;

nextButton.addEventListener("click", () => {
  showNextSlide();
  quizNumber++;
  if (quizNumber >= 0 && quizNumber <= 10) {
    document.getElementById(
      "quizNumber"
    ).innerHTML = `Question: ${quizNumber}/10`;
  }
});

let myVar;

//This function will send an alert when time is up
function myFunction() {
  myVar = setTimeout(function () {
    stop();
    alert("Time is Up! Click OK to Check Your Score");
    showResults();
    showResultsButton.style.display = "block";
  }, 60000);
}

let timeElapsed = 0;
let myTimer = 0;

//This function will start the timer
function timer() {
  myTimer = setInterval(function () {
    timeElapsed += 1;
    document.getElementById("time").innerText = timeElapsed;
  }, 1000);
}

function stop() {
  clearInterval(myTimer);
  submitButton.disabled = true;
  showResultsButton.style.display = "block";
}

// Get the button element
var backToTopButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
