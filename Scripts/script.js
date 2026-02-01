let humanScore = 0
let computerScore = 0

// Randomly return either rock, paper, or scissors
function getComputerChoice() {
    const randomValue = Math.random()

    if (randomValue <= 0.33) {
        return "rock"
    }

    else if (randomValue >= 0.66) {
        return "scissors"
    }

    else {
        return "paper"
    }
}

// Get human decision
function getHumanChoice(){
    return prompt("What is your choice")
}


function playRound(humanChoice, ComputerChoice) {
    
    const winsAgainst = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice.toLowerCase() == computerChoice) {
        console.log("Tie!");
    }
    else if (winsAgainst[humanChoice.toLowerCase()] == computerChoice ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore += 1
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerChoice += 1
    }
}

let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice()

playRound(humanChoice, computerChoice);

