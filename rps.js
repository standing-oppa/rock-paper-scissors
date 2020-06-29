function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return('You win! Rock beats Scissors');
    } else if( playerSelection === 'scissors' && computerSelection === 'paper') {
        return('You win! Scissors beats Paper');
    } else if( playerSelection === 'paper' && computerSelection === 'rock') {
        return('You win! Paper beats Rock');   
    } else if (playerSelection === computerSelection) {
        return("It's a tie!");
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        console.log(playRound(prompt('rock, paper, or scissors?'), computerPlay()))
    }
}