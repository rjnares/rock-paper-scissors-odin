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