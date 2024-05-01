function rdmNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {

    let number = rdmNumber(1,3);

    if (number === 1 ) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
   return prompt("Please choose Rock, Paper or Scissors").toLowerCase()
}


const humanScore = 0

const computerScore = 0 

function playRound(humanChoice, computerChoice){


}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();