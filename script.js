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