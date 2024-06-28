const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const validOptions = [ROCK, PAPER, SCISSORS];

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

function getComputerChoice() {
    const randomInteger = Math.floor(Math.random() * 3);

    if (randomInteger === 0) return ROCK;
    if (randomInteger === 1) return PAPER;

    return SCISSORS;
}

function playRound(playerChoice, cpuChoice) {
    if (currPlayerScore === 5 || currCpuScore === 5) {
        currPlayerScore = 0;
        currCpuScore = 0;
    }

    let newMessage = `You chose ${playerChoice} and the CPU chose ${cpuChoice}.`;
    
    if (playerChoice === cpuChoice) {
        newMessage += " Round ends in a draw.";
    } else if (playerWinsRound(playerChoice, cpuChoice)) {
        currPlayerScore++;
        newMessage += " You win this round.";

        if (currPlayerScore === 5) {
            newMessage += "\nGame over, you win! Press any option to start a new game. First to 5 points wins.";
        }
    } else {
        currCpuScore++;
        newMessage += " You lose this round.";

        if (currCpuScore === 5) {
            newMessage += "\nGame over, you lose! Press any option to start a new game. First to 5 points wins.";
        }
    }

    playerScore.textContent = currPlayerScore;
    cpuScore.textContent = currCpuScore;
    message.textContent = newMessage;
}

function playerWinsRound(playerChoice, cpuChoice) {
    return playerChoice === ROCK && cpuChoice === SCISSORS ||
           playerChoice === PAPER && cpuChoice === ROCK ||
           playerChoice === SCISSORS && cpuChoice === PAPER;
}