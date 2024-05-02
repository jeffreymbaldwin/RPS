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



const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

function playGame(){
    
    let humanScore = 0

    let computerScore = 0 
    
    function playRound(humanChoice, computerChoice){
     if (humanChoice === "rock" && computerChoice === "rock" ){
        return "rock vs rock. It's a tie."
     } else if ( humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++
        return "rock vs paper. You lose."   
     } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        return "rock vs scissors. You win."
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return "scissors vs rock. You lose."
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return "scissors vs paper. You win."
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "scissors vs scissors. It's a tie."
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "paper vs paper. It's a tie."
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return "paper vs rock. You win."
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return " paper vs scissors. You lose."
    } else return "You might have made an error. Please try again. "
    
    }
    



}