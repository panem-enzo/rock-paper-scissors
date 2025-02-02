function getComputerChoice() {
    let choice = Math.random(); // random double from 0->1
    if (choice < 1/3) {
        return 'rock'
    } else if (choice >= 1/3 && choice < 2/3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
}

let validChoice = false;
while (!validChoice) {
    let choice = getHumanChoice();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') validChoice = true;
}