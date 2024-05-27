console.log("Hello World")

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

function rpsIntToStr(rps) {
    switch(rps) {
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissors"
    }
}

function rpsStrToInt(rps) {
    switch(rps) {
        case "rock": return 1
        case "paper": return 2
        case "scissors": return 3
    }
}

function getComputerChoice() {
    var computerChoice =  getRandomInt(1,3)
    return rpsIntToStr(computerChoice)
}

function getPlayerChoice() {
    var playerChoice = prompt("Enter a choice: ").toLowerCase()
    var validChoices = ["rock", "paper", "scissors"]
    while (!(validChoices.includes(playerChoice))) {
        playerChoice = prompt("That is not a valid response. Please try again: ")
    }
    return playerChoice.toLowerCase()
}

function playRound(playerChoice, computerChoice) {
    let playerChoiceInt = rpsStrToInt(playerChoice)
    let computerChoiceInt = rpsStrToInt(computerChoice)
    if (playerChoice == computerChoice)
        return "It's a tie!"
    else if ((playerChoiceInt == 1 && computerChoiceInt == 3) || (playerChoiceInt > computerChoiceInt)) {
        playerScore++
        return "Player wins!"
    }
    else {
        computerScore++
        return "Computer wins!"
    }
}

function playGame(rounds) {
    let roundsPlayed = 0
    
    var playerChoice, computerChoice, roundResult

    while (roundsPlayed < rounds){
        roundsPlayed++
        playerChoice = getPlayerChoice()
        computerChoice = getComputerChoice()
        console.log("Player picks " + playerChoice)
        console.log("Computer picks " + computerChoice)
        roundResult = playRound(playerChoice, computerChoice)
        console.log(roundResult)
    }
    if (playerScore > computerScore) {
        console.log("Player wins " + playerScore + " to " + computerScore + "!")
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins " + computerScore + " to " + playerScore + "!")
    }
    // can only happen if rounds is even0
    else console.log("It's a tie!")
}

var playerScore = 0
var computerScore = 0
   
playGame(5)
console.log(playerScore)
console.log(computerScore)