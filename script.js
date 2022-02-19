function playRound(playerSelection, computerSelection = computerPlay()) {

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return ("This round is Tied. Player and Computer played Rock.");

        }
        else if (computerSelection === 'Paper') {
            computerScore = computerScore + 1;
            return ("You lose. Paper beats Rock.");
        }

        else if (computerSelection === 'Scissors') {
            playerScore = playerScore + 1;
            return ("You win. Rock beats Scissors");
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerScore = playerScore + 1;
            return ("You win. Paper beats Rock");
        }
        else if (computerSelection === 'Paper') {
            return ("This round is tied. Player and Computer played Paper");
        }

        else if (computerSelection === 'Scissors') {
            computerScore = computerScore + 1;
            return ("You lose. Scissors beat Paper");
        }

    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore = computerScore + 1;
            return ("You lose. Rock beats Scissors");
        } else if (computerSelection === 'Paper') {
            playerScore = playerScore + 1;
            return ("You win. Scissors beat Paper");
        } else if (computerSelection === 'Scissors') {
            return ("This round is tied. Player and Computer played Scissors");
        }

    }


}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    return validPlays[getRandomInt()];

}

function userPlay(choice) {
    let result = playRound(choice, computerPlay());
    resultsDiv.textContent = `${result}`;
    scoreDiv.textContent = `SCORE: COMPUTER ${computerScore} 
            VS ${playerScore} YOU`;
    game2();
}

function game() {

    if (computerScore === 5) {
        alert('Computer wins!');

    } else if (playerScore === 5) {
        alert('You win!');
    }

}

let validPlays = ["Rock", "Paper", "Scissors"];
let playerScore = +0;
let computerScore = +0;

const playPaper = document.querySelector(".play-paper");
const playRock = document.querySelector('.play-rock');
const playScissors = document.querySelector('.play-scissors');
const resultsDiv = document.querySelector('.display-results');
const scoreDiv = document.querySelector('#score-div');

playRock.addEventListener('click', () => {
    userPlay('Rock');
});
playPaper.addEventListener('click', () => {
    userPlay('Paper');
});
playScissors.addEventListener('click', () => {
    userPlay('Scissors');
});

function game2() {
    if (computerScore === 5) {
        if (confirm('Computer wins! /n Wanna play another game?')) {
            computerScore = playerScore = 0;
        } else {
            // playRock.removeEventListener('click', () => {
            //     userPlay('Rock');
            // });
            // playPaper.removeEventListener('click', () => {
            //     userPlay('Paper');
            // });
            // playScissors.removeEventListener('click', () => {
            //     userPlay('Scissors');
            // });
        }

    } else if (playerScore === 5) {
        if (confirm('You win! /n Wanna play another game?')) {
            computerScore = playerScore = 0;
        } else {
            // playRock.removeEventListener('click', () => {
            //     userPlay('Rock');
            // });
            // playPaper.removeEventListener('click', () => {
            //     userPlay('Paper');
            // });
            // playScissors.removeEventListener('click', () => {
            //     userPlay('Scissors');
            // });
        }
    }
}