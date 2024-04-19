function rdmNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let number = rdmNumber(1,3);


function getComputerChoice() {
    if (number === 1 ) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getPlayerChoice(){
   return prompt("Please choose Rock, Paper or Scissors").toLowerCase()
}


let computerSelection = getComputerChoice();

let playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "rock and rock: it's a tie."
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "rock and paper: you lose."
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "rock and scissors: you win!"
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "paper and paper: it's a tie."
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "paper and scissors: you lose."
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "scissors and scissors: it's a tie."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "scissors and rock: you lose!"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "scissors and paper: you win!"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "paper and rock: you win!"
    } else {
        return "You must have typed something incorrectly. Please try again."
    }
}

console.log(playRound(playerSelection, computerSelection));