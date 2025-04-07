const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

const title = document.querySelector(".title");
const roundText = document.createElement('h2');
roundText.style.color = 'pink';
title.appendChild(roundText);

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

const reset = document.querySelector(".reset-button");
reset.addEventListener("click", () => {
    const humanChoice = 'reset';
    playGame(humanChoice);
});

/* CHANGE HERE */
const gameScore = document.createElement('h3');
gameScore.setAttribute('style', 'white-space: pre;');
gameScore.textContent = "Your score: " + humanScore + "\r\n";
gameScore.textContent += "Computer score: " + computerScore;
//title.appendChild(gameScore);

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
        roundText.textContent = `${humanChoice} beats ${computer}. You win!`
        humanScore += 1;
    }
    else if (((computer === 'rock') && (humanChoice === 'scissors')) || ((computer === 'scissors') && (humanChoice === 'paper')) || ((computer === 'paper') && (humanChoice === 'rock'))) {
        roundText.textContent = `${computer} beats ${humanChoice}. Computer wins :(`
        computerScore += 1;
    }

    /*CHANGE HERE AS WELL*/
    gameScore.textContent = "Your score: " + humanScore + "\r\n";
    gameScore.textContent += "Computer score: " + computerScore;




}




