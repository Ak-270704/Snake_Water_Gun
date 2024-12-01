// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "gun") ||
        (userChoice === "gun" && computerChoice === "snake")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to play the game
function playGame(userChoice) {
    const choices = ["snake", "water", "gun"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update the DOM with choices and result
    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById("game-result").textContent = result;
}
