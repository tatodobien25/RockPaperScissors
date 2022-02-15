function computerPlay() {
    return validPlays[getRandomInt()];

}

function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {

    // playerSelection = playerPlay();
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

function playerPlay() {
    let rawUserInput = prompt("Type your play (It's not case sensitive)");
    userInput = rawUserInput.toLowerCase();
    userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());
    return userInput;

}

function game() {
    // resets scores everytime it's called
    computerScore = 0;
    playerScore = 0;

    // while loop with playRound() and sending score all the time
    while (computerScore < 5 && playerScore < 5) {
        console.log(playRound());
        console.log(`SCORE: Computer ${computerScore} - ${playerScore} Player`);
        // playRound();

    }

    if (computerScore === 5) {
        alert('Computer wins!');
    } else if (playerScore === 5) {
        alert('You win!');
    }
    // if statements for winner
}



let validPlays = ["Rock", "Paper", "Scissors"];
//  const playerSelection = playerPlay();
let computerSelection = computerPlay();
let playerScore = +0;
let computerScore = +0;