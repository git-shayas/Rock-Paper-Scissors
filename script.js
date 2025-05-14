console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;
playGame();

console.log("Computer Score " + computerScore);
console.log("Human Score " + humanScore)
if (humanScore > computerScore) {
    console.log("Human win"); 
} else if (computerScore > humanScore) {
    console.log("Computer win");
} else {
    console.log("Tie");
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice ());
    }
}

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
        return getHumanChoice();
    } else {
        return choice;
    }
}

function playRound(getHumanChoice, getComputerChoice) {
    const humanChoice = getHumanChoice;
    const computerChoice = getComputerChoice;
    console.log("Human choose " + humanChoice);
    console.log("Computer choose " + computerChoice);
    if (humanChoice == computerChoice) {
        console.log("It's tie!");
        humanScore += 0;
        computerScore += 0;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("Human loose & Computer win");
        humanScore += 0;
        computerScore += 1;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Human win & Computer loose");
        humanScore += 1;
        computerScore += 0;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("Human win & Computer loose");
        humanScore += 1;
        computerScore += 0;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("Human loose & Computer win");
        humanScore += 0;
        computerScore += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("Human loose & Computer win");
        humanScore += 0;
        computerScore += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Human win & Computer loose");
        humanScore += 1;
        computerScore += 0;
    } else {
        console.log("Something went wrong");
    }
}