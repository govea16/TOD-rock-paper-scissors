const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

let humanScore = 0;
let computerScore = 0;


rock.addEventListener("click", () => {
    const humanChoice = "rock";
    playGame(humanChoice);
})

paper.addEventListener("click", () => {
    const humanChoice = "paper";
    playGame(humanChoice);
})

scissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    playGame(humanChoice);
})

const reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {
    const humanChoice = 'reset';
    playGame(humanChoice);
});

const playerScoreBox = document.querySelector('.player-score');
const displayedPlayerScore = document.createElement('h3');
displayedPlayerScore.style.fontSize = "96px";
displayedPlayerScore.style.fontWeight = "400";
displayedPlayerScore.textContent = humanScore;
playerScoreBox.appendChild(displayedPlayerScore);

const computerScoreBox = document.querySelector('.computer-score');
const displayedComputerScore = document.createElement('h3');
displayedComputerScore.style.fontSize = "96px";
displayedComputerScore.style.fontWeight = "400";
displayedComputerScore.textContent = humanScore;
computerScoreBox.appendChild(displayedComputerScore);

const roundBox = document.querySelector(".game-feedback");
const roundText = document.createElement("p");
roundText.style.fontWeight = "400";
roundText.style.fontSize = "48px";
roundText.textContent = "Click a button below to start the game.";
roundBox.appendChild(roundText);

function playGame (humanChoice) {
    if (humanChoice === 'reset') {
        humanScore = 0;
        computerScore = 0;
    }
    function getComputerChoice() {
        let rdm = Math.random();
        let computerChoice = "";
        if (rdm <= .3333333) {
            computerChoice = "rock";
        }
        else if (rdm <= .666666) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        return computerChoice;
    }

    let computer = getComputerChoice();

    if (humanChoice === computer) {
        roundText.textContent = "Tie!";
    }
    else if (((humanChoice === 'rock') && (computer === 'scissors')) || ((humanChoice === 'scissors') && (computer === 'paper')) || ((humanChoice === 'paper') && (computer === 'rock'))) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        roundText.textContent = `${humanChoice} beats ${computer}. You win!`
        humanScore += 1;
    }
    else if (((computer === 'rock') && (humanChoice === 'scissors')) || ((computer === 'scissors') && (humanChoice === 'paper')) || ((computer === 'paper') && (humanChoice === 'rock'))) {
        computer = computer.charAt(0).toUpperCase() + computer.slice(1);
        roundText.textContent = `${computer} beats ${humanChoice}. Computer wins.`
        computerScore += 1;
    }


    displayedPlayerScore.textContent = humanScore;
    displayedComputerScore.textContent = computerScore;




}




