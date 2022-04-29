'use strict'

function playRound(userSelection, computerSelection = computerPlay()) {

    if (userSelection === 'Rock') {

        if (computerSelection === 'Rock') {
            return ("It's a tie! Player and Computer played Rock.");

        } else if (computerSelection === 'Paper') {
            ++computerScore;
            return ("You lose. Paper beats Rock.");
        } else if (computerSelection === 'Scissors') {
            ++userScore;
            return ("You win. Rock beats Scissors");
        }
    } else if (userSelection === 'Paper') {

        if (computerSelection === 'Rock') {
            ++userScore;
            return ("You win. Paper beats Rock");
        } else if (computerSelection === 'Paper') {
            return ("It's a tie! Player and Computer played Paper");
        } else if (computerSelection === 'Scissors') {
            ++computerScore;
            return ("You lose. Scissors beat Paper");
        }

    } else if (userSelection === 'Scissors') {

        if (computerSelection === 'Rock') {
            ++computerScore;
            return ("You lose. Rock beats Scissors");
        } else if (computerSelection === 'Paper') {
            ++userScore;
            return ("You win. Scissors beat Paper");
        } else if (computerSelection === 'Scissors') {
            return ("It's a tie! Player and Computer played Scissors");
        }
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    return validPlays[getRandomInt()];
}

function userPlayRock() {
    let result = playRound('Rock', computerPlay());
    resultsDiv.textContent = `${result}`;
    scoreDiv.textContent = `SCORE: YOU ${userScore} VS ${computerScore}
            COMPUTER`;
    if (computerScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'COMPUTER WINS!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);
        resetGameDiv.appendChild(resetGameButton);

    } else if (userScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'YOU WIN!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);
        resetGameDiv.appendChild(resetGameButton);
    }
}

function userPlayPaper() {
    let result = playRound('Paper', computerPlay());
    resultsDiv.textContent = `${result}`;
    scoreDiv.textContent = `SCORE: YOU ${userScore} VS ${computerScore}
            COMPUTER`;
    if (computerScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'COMPUTER WINS!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);

    } else if (userScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'YOU WIN!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);
    }
}

function userPlayScissors() {
    let result = playRound('Scissors', computerPlay());
    resultsDiv.textContent = `${result}`;
    scoreDiv.textContent = `SCORE: YOU ${userScore} VS ${computerScore}
            COMPUTER`;
    if (computerScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'COMPUTER WINS!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);

    } else if (userScore === 5) {
        computerScore = 0;
        userScore = 0;
        winnerDiv.textContent = 'YOU WIN!';
        playRock.removeEventListener('click', userPlayRock);
        playPaper.removeEventListener('click', userPlayPaper);
        playScissors.removeEventListener('click', userPlayScissors);
    }
}
let validPlays = ["Rock", "Paper", "Scissors"];
let userScore = +0;
let computerScore = +0;

const winnerDiv = document.querySelector('#announces-winner');
const playPaper = document.querySelector('.play-paper');
const playRock = document.querySelector('.play-rock');
const playScissors = document.querySelector('.play-scissors');
const resultsDiv = document.querySelector('.display-results');
const scoreDiv = document.querySelector('#score-div');
const resetGameButton = document.createElement('button');
const resetGameDiv = document.querySelector('#reset-div');
resetGameButton.setAttribute('type', 'button');
resetGameButton.textContent = 'Reset Game/Play Again';

playRock.addEventListener('click', userPlayRock);
playPaper.addEventListener('click', userPlayPaper);
playScissors.addEventListener('click', userPlayScissors);