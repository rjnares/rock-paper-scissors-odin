function getComputerChoice() {
    // Get random integer in range [0, 2]
    const randomInteger = Math.floor(Math.random() * 3);

    if (randomInteger === 0) return "rock";
    if (randomInteger === 1) return "paper";

    return "scissors";
}

function getHumanChoice() {
    let input;

    do {
        input = prompt("Enter rock, paper, or scissors");

        // If player cancels prompt, then default human choice to rock
        if (input === null) return "rock";
        
        // Trim input whitespace and make all lowercase for easier comparisons
        input = input.trim().toLowerCase();
    }
    while (input !== "rock" && input !== "paper" && input !== "scissors");

    return input;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // All combos where human choice beats computer choice
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        // All combos where human choice loses to computer choice
        else if ((computerChoice === "rock" && humanChoice === "scissors") ||
                (computerChoice === "paper" && humanChoice === "rock") ||
                (computerChoice === "scissors" && humanChoice === "paper")) {
            
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        // All combos where human choice and computer choice are the same
        else {
            console.log("It's a tie!");
        }
    }

    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`Game Over! You won ${humanScore} to ${computerScore}.`);
    }
    else if (computerScore > humanScore) {
        console.log(`Game Over! You lost ${humanScore} to ${computerScore}.`);
    }
    else {
        console.log(`Game Over! You tied ${humanScore} to ${computerScore}.`);
    }
}

const validOptions = ["rock", "paper", "scissors"];

const message = document.querySelector("#message");
const options = document.querySelector("#options");
const playerScore = document.querySelector("#player-score .score");
const cpuScore = document.querySelector("#cpu-score .score");

let currPlayerScore = 0;
let currCpuScore = 0;

options.addEventListener("click", (event) => {
    if (validOptions.includes(event.target.id)) {
        playRound(event.target.id, getComputerChoice());
    }
});

function playRound(playerChoice, cpuChoice) {
    let newMessage = `You chose ${playerChoice} and the CPU chose ${cpuChoice}.`;
    
    if (playerChoice === cpuChoice) {
        message.textContent =  `${newMessage} Round ends in a draw.`;
    } else if (playerWinsRound(playerChoice, cpuChoice)) {
        newMessage += " You win this round.";
        currPlayerScore++;

        if (currPlayerScore === 5) {
            newMessage += " Game over, you win! Press any option to start a new game. First to 5 points wins.";
        }

        playerScore.textContent = currPlayerScore;
        message.textContent = newMessage;
    } else {
        newMessage += " You lose this round.";
        currCpuScore++;

        if (currCpuScore === 5) {
            newMessage += " Game over, you lose! Press any option to start a new game. First to 5 points wins.";
        }

        cpuScore.textContent = currCpuScore;
        message.textContent = newMessage;
    }
}

function playerWinsRound(playerChoice, cpuChoice) {
    return playerChoice === "rock" && cpuChoice === "scissors" ||
           playerChoice === "paper" && cpuChoice === "rock" ||
           playerChoice === "scissors" && cpuChoice === "paper";
}