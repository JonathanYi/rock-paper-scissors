function computerPlay() {
    const rps = ['Rock','Paper','Scissors'];
    return rps[Math.floor(Math.random()*3)];
}

function gameRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    if ((ps === 'rock' && cs === 'scissors') ||
        (ps === 'paper' && cs === 'rock') ||
        (ps === 'scissors' && cs === 'paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (ps === cs) {
        return `Tie! ${playerSelection} and ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}