console.log("Rock Paper Scissors");

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

function getComputerChoice () {
    let randomNumGen = Math.floor(Math.random() * 3);
    if (randomNumGen == 0) {
        return "rock";
    } else if (randomNumGen == 1) {
        return "paper";
    } else if (randomNumGen == 2) {
        return "scissors";
    } else {
        return "Error" ;
    }
}

function getHumanChoice() {
    let choice = prompt('Enter "Rock | Paper | Scissors', '');
    if (choice == null) {
        alert("cancelled");
    }
    choice = choice.toLowerCase();
    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        alert("Select from given options 'Rock | Paper | Scissors'");
    } else {
        return choice;
    }
}