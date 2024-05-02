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


function playGame(){

    let humanScore = 0

    let computerScore = 0 
    
    function playRound(humanChoice, computerChoice){
     if (humanChoice === "rock" && computerChoice === "rock" ){
        alert("rock vs rock. It's a tie.")
     } else if ( humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++
        alert("rock vs paper. You lose.")   
     } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++
        alert("rock vs scissors. You win.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        alert("scissors vs rock. You lose.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        alert("scissors vs paper. You win.")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        alert("scissors vs scissors. It's a tie.")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        alert("paper vs paper. It's a tie.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        alert("paper vs rock. You win.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        alert(" paper vs scissors. You lose.")
    } else  alert("You might have made an error. Please try again. ")
    
    }
    
    function showScore(){
        console.log("human score:",humanScore, "computer score:", computerScore);
    }

    function declareWinner(){
        if(humanScore > computerScore){
            console.log( "Congrats! You win!")
        } else if ( humanScore < computerScore) {
            console.log("You lost! That sucks!")
        } else {
            console.log("Looks like it's a tie.")
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));

    showScore()

    console.log(playRound(getHumanChoice(), getComputerChoice()));

    showScore()

    console.log(playRound(getHumanChoice(), getComputerChoice()));

    showScore()

    console.log(playRound(getHumanChoice(), getComputerChoice()));

    showScore()

    console.log(playRound(getHumanChoice(), getComputerChoice()));

    showScore()

    declareWinner();
    
}

playGame();