const options = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;
const maxWins = 3;

function play(userChoice) {
  if (userWins === maxWins || computerWins === maxWins) {
    return;
  }

  const computerChoice = getRandomChoice();
  const result = getResult(userChoice, computerChoice);
  showMessage(result, userChoice, computerChoice);

  if (result === "¡Ganaste!") {
    userWins++;
  } else if (result === "¡Perdiste!") {
    computerWins++;
  }

  updateScoreboard();
  checkGameEnd();
}

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Empate";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "¡Ganaste!";
  } else {
    return "¡Perdiste!";
  }
}

function showMessage(result, userChoice, computerChoice) {
  const message = document.getElementById("message");
  message.textContent = `Elegiste ${userChoice}. La computadora eligió ${computerChoice}. ${result}`;
}

function updateScoreboard() {
  const userScore = document.getElementById("user-score");
  const computerScore = document.getElementById("computer-score");
  userScore.textContent = userWins;
  computerScore.textContent = computerWins;
}

function checkGameEnd() {
  if (userWins === maxWins || computerWins === maxWins) {
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(function (button) {
      button.disabled = true;
    });
  }
}

function resetGame() {
  userWins = 0;
  computerWins = 0;

  const buttons = document.querySelectorAll(".option");
  buttons.forEach(function (button) {
    button.disabled = false;
  });

  const message = document.getElementById("message");
  message.textContent = "";

  updateScoreboard();
}

const buttons = document.querySelectorAll(".option");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    play(button.id);
  });
});
