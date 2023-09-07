function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case 1:
            return "scissors"
        case 2:
            return "rock"
        case 3:
            return "paper"

    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    let playerWins = (player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock');
    
    
    if (player === computer) {
        return "It's a Draw!"
    }
    else if (playerWins) {
        return `You Won! ${capitalize(player)} beats ${capitalize(computer)}!`
    }
    else {
        return `You Lost! ${capitalize(player)} is beaten by ${capitalize(computer)}!`
    }
}

function game() {
    let playerWins = 0
    let computerWins = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick your Weapon: Rock, Paper or Scissors", "Rock")
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        
        if (result.startsWith("You Won!")) playerWins++;
        else if (result.startsWith("You Lost!")) computerWins++;
    }

    let winner = playerWins > computerWins ? "Player" : playerWins < computerWins ? "Computer" : "No one";
    console.log(`${winner} Wins!`)
    console.log(`Player won ${playerWins} rounds!`)
    console.log(`Computer won ${computerWins} rounds!`)
    if (winner === "No one") console.log("It's a Draw!");
}

game()