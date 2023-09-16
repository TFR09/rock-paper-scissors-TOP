let pScore = 0;
let cScore = 0
let compScore = document.querySelector(".computer-score")
let playerScore = document.querySelector(".your-score")
const buttons = document.querySelectorAll(".container > button")

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case 1:
            return "Scissors"
        case 2:
            return "Rock"
        case 3:
            return "Paper"
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()

    document.querySelector(".computer-choice").innerHTML = `The computer chose ${computerSelection}!`;

    let playerWins = (player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock');
    
    const result = document.querySelector(".result");
    
    if (player === computer) {
        return result.innerHTML = "It's a Draw!"
    }
    else if (playerWins) {
        pScore++
        playerScore.innerHTML = `You : ${pScore}`;
        return result.innerHTML = `${capitalize(player)} beats ${capitalize(computer)}!`
    }
    else {
        cScore++
        compScore.innerHTML = `Computer : ${cScore}`;
        return result.innerHTML = `${capitalize(player)} is beaten by ${capitalize(computer)}!`
    }
}

function reset() {
    pScore = 0
    cScore = 0
    playerScore.innerHTML = "You : 0";
    compScore.innerHTML = "Computer : 0";
    document.querySelector(".result").innerHTML = "";
    document.querySelector(".computer-choice").innerHTML = "";
    document.querySelector(".final-result").innerHTML = "";
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.removeChild(resetBtn.firstChild)
    buttons.forEach(button => button.addEventListener("click", play))
}

function gameOver() {
    return pScore === 5 || cScore === 5;
}

function play() {
    let player = this.value
    let computer = getComputerChoice()
    playRound(player, computer)
    let end = gameOver()

    if (end) {
        buttons.forEach(button => button.removeEventListener("click", play))
        let winner = pScore === 5 ? "Player" : "Computer";
        let finalResult = document.querySelector(".final-result");
        if (winner === "Player") {
            finalResult.innerHTML = "You have Conquered the Machines!";
        } 
        else {
            finalResult.innerHTML = "The Machines have Won!";
        }
        const resetBtn = document.createElement("button");
        resetBtn.innerHTML = "Try Again?";
        resetBtn.onclick = reset;
        const resetCon = document.querySelector(".reset-btn");
        resetCon.appendChild(resetBtn);
    }
}

buttons.forEach(button => button.addEventListener("click", play))