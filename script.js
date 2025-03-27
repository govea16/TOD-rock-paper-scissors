let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let random = Math.random()
    if (random <= .3333333) {
        return "rock";
    }
    else if (random <= .666666666) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice () {
    choice = prompt("Type rock, paper or scissors").toLowerCase();
    switch (choice) {
        case "rock":
            return "You selected rock"
            break;
        case "paper":
            return "You selected paper"
            break;
        case "scissors":
            return "You selected scissors"
            break;
        default:
            "Please select rock, paper or scissors"
            break;
    }
}

function playRound () {
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else if (((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "scissors") && (computerChoice === "paper")) || ((humanChoice === "paper") && (computerChoice === "rock"))) {
        humanScore++;
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
    }
    else {
        computerScore++;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
    }

}

function playGame () {
    for (let i=0;i<5;i++) {
        playRound();
        console.log()
    }
}

console.log(playRound())