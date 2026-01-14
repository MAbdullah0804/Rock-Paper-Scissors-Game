// Grab all the buttons and score elements
const userScoreEl = document.querySelector(".user-scr");
const compScoreEl = document.querySelector(".comp-scr");
const moveBtn = document.querySelector(".move");
const options = document.querySelectorAll(".opt");

let userScore = 0;
let compScore = 0;

// Function to generate computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    return choices[randomIndex];
}

// Function to determine winner
function playRound(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "user";
    } else {
        return "comp";
    }
}

// Function to update scores
function updateScores(winner) {
    if (winner === "user") {
        userScore++;
        userScoreEl.textContent = userScore;
    } else if (winner === "comp") {
        compScore++;
        compScoreEl.textContent = compScore;
    }
}

// Function to show the result of the round
function showResult(userChoice, compChoice, winner) {
    const resultText = winner === "draw"
        ? `It's a draw! You both picked ${userChoice}!`
        : winner === "user"
        ? `You win! ${userChoice} beats ${compChoice}!`
        : `You lose! ${compChoice} beats ${userChoice}!`;

    moveBtn.textContent = resultText;
}

// Add event listeners to buttons
options.forEach(button => {
    button.addEventListener("click", () => {
        let userChoice = button.id === "szr" ? "scissors" : button.id; // fix the scissors button id
        let compChoice = getComputerChoice();
        let winner = playRound(userChoice, compChoice);
        updateScores(winner);
        showResult(userChoice, compChoice, winner);
    });
});
