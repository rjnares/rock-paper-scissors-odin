function getComputerChoice() {
    // Returns random integer in range [0, 2]
    const randomInt = Math.floor(Math.random() * 3);
    let move;

    if (randomInt === 0) {
        move = "rock";
    }
    else if (randomInt === 1) {
        move = "paper";
    }
    else {
        move = "scissors";
    }

    return move;
}