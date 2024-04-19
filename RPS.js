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

function playRound(playerSelection, computerSelection) {
    if playerSelection === ""
}