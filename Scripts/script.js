let humanScore = 0
let computerScore = 0

// event listerns
let rockButton = document.getElementById("rockButton")
let paperButton = document.getElementById("paperButton")
let scissorsButton = document.getElementById("scissorsButton")
let results = document.querySelector(".results")
let scoreText = document.querySelector('.score')

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


function playRound(humanChoice, computerChoice) {
    
    const winsAgainst = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice.toLowerCase() == computerChoice) {
        results.textContent = "Tie!"
    }
    else if (winsAgainst[humanChoice.toLowerCase()] == computerChoice ) {
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice
        humanScore += 1
    }
    else {
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice
        computerScore += 1
    }
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    scoreText.textContent = "Human = " + humanScore + " Robot = " + computerScore
    
}

rockButton.addEventListener('click', () => playGame("rock"))
paperButton.addEventListener('click', () => playGame("paper"))
scissorsButton.addEventListener('click', () => playGame("scissors"))



