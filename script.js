// QUESTIONS
let questions = [
  {
    question: "What jersey number is retired by the Chicago Bulls?",
    choiceA: "45",
    choiceB: "21",
    choiceC: "23",
    choiceD: "0",
    correct: "23",
  },
  {
    question:
      "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
    choiceA: "7",
    choiceB: "6",
    choiceC: "5",
    choiceD: "4",
    correct: "6",
  },
  {
    question: "Which team did Michael Jordan play for?",
    choiceA: "Chicago Bulls",
    choiceB: "Detroit Pistons",
    choiceC: "Indiana Pacers",
    choiceD: "New York Knicks",
    correct: "Chicago Bulls",
  },
  {
    question:
      "Which player also won six championships playing alongside Michael Jordan with the Chicago Bulls?",
    choiceA: "Dennis Rodman",
    choiceB: "Scottie Pippen",
    choiceC: "Steve Kerr",
    choiceD: "Horace Grant",
    correct: "Scottie Pippen",
  },
];

// DISPLAY QUESTIONS
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let display = document.getElementById("display");

let questionIndex = 0;
let initialScore = 0;

let currentScore = document.getElementById("score");

getNewQuestion = () => {
  let currentQuestion = questions[questionIndex];
  question.innerHTML = currentQuestion.question;
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const selectedChoice = e.target.innerHTML;
    let currentQuestion = questions[questionIndex];
    if (questionIndex === 3) {
      return window.location.assign("./end.html");
    } else if (selectedChoice === currentQuestion.correct) {
      questionIndex++;
      currentScore.innerHTML = ++initialScore;
      localStorage.setItem("currentScore", currentScore.innerHTML);
      getNewQuestion();
    } else {
      display.innerHTML = "";
      currentScore.innerHTML = --initialScore;
      let displayItem = document.createElement("p");
      displayItem.textContent = "incorrect";
      display.appendChild(displayItem);
      questionIndex++;
      getNewQuestion();
    }
  });
});
getNewQuestion();

// COUNTDOWN TIMER
playBtn = document.getElementById("playBtn");
let countDown = document.getElementById("secondsLeft");
let startBtn = document.getElementById("startBtn");

function startCountDown() {
  let counter = 30;

  const interval = setInterval(() => {
    counter--;

    if (counter <= 0) {
      clearInterval(interval);
      countDown.innerHTML = "Finished";
    } else {
      countDown.innerHTML = counter;
    }
  }, 1000);
}
startBtn.addEventListener("click", startCountDown);

// STARTS QUIZ

function startQuiz() {
  let questionBlock = document.getElementById("displayQuestion");

  questionBlock.style.display = "block";
}

startBtn.addEventListener("click", startQuiz);

// DISPLAY SCORE
let finalScore = document.getElementById("finalScore");
finalScore.innerHTML = localStorage.getItem("currentScore");

// CHECK ANSWER
