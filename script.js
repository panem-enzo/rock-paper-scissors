function getComputerChoice() {
  const choice = Math.random(); // random double from 0->1
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice >= 1 / 3 && choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

// Validate human choice

let humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let validChoice = false;
while (!validChoice) {
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  )
    validChoice = true;
  else {
    console.log("Invalid input. Try again");
    humanChoice = getHumanChoice();
  }
}

function playGame() {
  // Scorekeeping

  let humanScore = 0;
  let computerScore = 0;

  // playRound

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else {
      console.log("It's a draw!");
    }

    console.log(`Your Score: ${humanScore} | CPU Score: ${computerScore}`);
  }

  playRound(humanChoice, computerChoice);
}
