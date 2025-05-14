console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("Human choose " + humanSelection);
console.log("Computer choose " + computerSelection);

playRound(humanSelection, computerSelection);

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

function playRound(humanChoice, computerChoice) {
  // your code here!
  console.log("This function");
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