const getComputerChoice = () => {
  const choice = Math.random(); // random double from 0->1
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice >= 1 / 3 && choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  let winningScore = 5;

  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");

  rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
  });
  paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
  });
  scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
  });

  const scoreboard = document.querySelector(".scoreboard");
  const log = document.createElement("p");
  const score = document.createElement("p");
  scoreboard.appendChild(log);
  scoreboard.appendChild(score);

  function playRound(computerChoice, humanChoice) {
    scoreboard.setAttribute("style", "border: solid");

    if (humanChoice === "rock" && computerChoice === "paper") {
      log.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      log.textContent = "You win! Rock beats Scissors";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      log.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      log.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      log.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      log.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else {
      log.textContent = "It's a draw!";
    }

    score.textContent = `Human Score = ${humanScore} | Computer Score = ${computerScore}`;

    const selectionDiv = document.querySelector(".selection");
    const resultsDiv = document.querySelector(".results");
    const resultsMsg = document.createElement("p");
    resultsDiv.appendChild(resultsMsg);

    function endGame() {
      selectionDiv.removeChild(rockBtn);
      selectionDiv.removeChild(paperBtn);
      selectionDiv.removeChild(scissorsBtn);
    }

    if (humanScore == winningScore) {
      resultsMsg.textContent = "Game Over! You WON the game";
      endGame();
    } else if (computerScore == winningScore) {
      resultsMsg.textContent = "Game Over! You LOST the game";
      endGame();
    }
  }
};

playGame();
