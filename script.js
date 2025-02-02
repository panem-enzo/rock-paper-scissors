function getComputerChoice() {
    choice = Math.random();
    if (choice < 1/3) {
        return 'rock'
    } else if (choice >= 1/3 && choice < 2/3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

rockCount = 0;
scissorCount = 0;
paperCount = 0;

for (i=0; i<100; i++) {
    choice = getComputerChoice();
    if (choice === 'rock') {
        rockCount++;
    } else if (choice === 'scissors') {
        scissorCount++;
    } else {
        paperCount++;
    }
}

console.log(`# rocks: ${rockCount}\n # papers: ${paperCount}\n # scissors: ${scissorCount}`);