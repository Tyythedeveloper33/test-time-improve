
  
  
          
// questions array
var questions = [
  {
    question: "Question 1: What does it generally mean when a web developer refers to frontend projects?",
    answers: [
      { option: "Developer's side", correct: false },
      { option: "Database", correct: false },
      { option: "Clients-side", correct: true },
      { option: "Servers", correct: false }
    ]
  },
  {
    question: "Question 2: What does HTML stand for?",
    answers: [
      { option: "Hyper Tag Markup Language", correct: false },
      { option: "Hyperlinks Text Markup Language", correct: false },
      { option: "Hyperlinking Text Markup Language", correct: false },
      { option: "Hyper Text Markup Language", correct: true }
    ]
  },
  {
    question: "Question 3: Element used as a container for some text is defined as?",
    answers: [
      { option: "span", correct: true },
      { option: "div", correct: false },
      { option: "Style", correct: false },
      { option: "Container", correct: false }
    ]
  },
  {
    question: "Question 4: <div> element used along together with CSS can generate?",
    answers: [
      { option: "Style Blocks", correct: true },
      { option: "Div Blocks", correct: false },
      { option: "Table Blocks", correct: false },
      { option: "Content Blocks", correct: false }
    ]
  },
  {
    question: "Question 5: Data type of null is a/an?",
    answers: [
      { option: "Function", correct: false },
      { option: "Object", correct: true },
      { option: "Number", correct: false },
      { option: "Undefined", correct: false }
    ]
  }
];


// sets what the variables start off at
var questionIndex = 0;
var correctAnswerCount = 0;


// defining the variables
var questionContainer = document.querySelector("#question-box");
var submitBtn = document.querySelector("#submit");
var startQuizBtn = document.querySelector("#startQuiz");


// adding event listeners
startQuizBtn.addEventListener('click', renderQuestion);
submitBtn.addEventListener("click", handleAnswerSelection);
questionContainer.addEventListener("submit", handleAnswerSubmission)

// this brings up question 1
function renderQuestion() {
  var question = questions[questionIndex];
  var newFieldset = document.createElement("fieldset");
  var newLegend = document.createElement("legend");
  newLegend.textContent = question.question;


  // Appending the legend element containing the question text to the fieldset
  newFieldset.appendChild(newLegend);
  question.answers.forEach(function(answer, index) {
    var newAnswer = document.createElement("div");
    newAnswer.innerHTML = `<input type='radio' name='answer' value='${index}' id='answer-${index}'><label for='answer-${index}'>${answer.option}</label>`;
    newFieldset.appendChild(newAnswer);
  });


  // Clearing the question container and appending the fieldset and submit button
  questionContainer.innerHTML = "";
  questionContainer.appendChild(newFieldset);
  questionContainer.appendChild(submitBtn);
}


function handleAnswerSelection(event) {
  var selectedAnswer = Number(event.target.value);
  var currentQuestion = questions[questionIndex];


  if (currentQuestion.answers[selectedAnswer].correct === true) {
    console.log("correct!!");
    correctAnswerCount++;
  }else {
    console.log("wrong Answer !");
  }
    
  }
function handleAnswerSubmission() {
  var selectedAnswer = document.querySelector("input[name='answer']:checked");
  if (selectedAnswer) {
    handleAnswerSelection(selectedAnswer);
    showNextQuestion();
    } else {
      alert('please select an answer');
    }
  }
    
  // new new
  function showNextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }
  
  
  function showResult() {
    var score = correctAnswerCount * 20;
    console.log("score: " + score + "% " )};
