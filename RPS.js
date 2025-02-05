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

function playGame(){

    let humanScore = 0;

    let computerScore = 0;

   
    function playRound(humanChoice, computerChoice){
        let resultText = "";

        if (humanChoice === computerChoice) {
            resultText = `${humanChoice} vs ${computerChoice}. It's a tie.`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock" ) ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            resultText = `Your ${humanChoice} beats ${computerChoice}! You win!`;
        } else { 
            computerScore++;
            resultText = `Your ${humanChoice} loses to ${computerChoice}! Too bad!`;
        }

        document.querySelector("#results").textContent = resultText;
    
    }
    

function updateDisplay(){
    document.querySelector("#score").textContent =
        `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
        if (humanScore === 5) {
            let finalMessage = `${humanScore} > ${computerScore}. Congrats! You win!`
            alert(finalMessage);   
            humanScore = 0;
            computerScore = 0;         
        } else if (computerScore === 5) {
            let finalMessage = `${humanScore} < ${computerScore}. Oh no! You lost!`
            alert(finalMessage);
            humanScore = 0;
            computerScore = 0;
        }
}
    

    
    
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors")

    
    rockButton.addEventListener("click",() => {
        playRound("rock", getComputerChoice());
        updateDisplay();
    });

    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        updateDisplay();
    });

    scissorsButton.addEventListener("click", ()=> {
        playRound("scissors", getComputerChoice());
        updateDisplay();
    });

    





    
}

playGame()