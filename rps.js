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
    else if ((playerChoiceInt == 0 && computerChoiceInt == 3) || (playerChoiceInt > computerChoiceInt)) {
        playerScore++
        console.log(playerScore)
        return "Player wins!"
    }
    else {
        computerScore++
        console.log(computerScore)
        return "Computer wins!"
    }
}


var playerScore = 0
var computerScore = 0
var computerChoice = getComputerChoice()
var playerChoice = getPlayerChoice()

console.log(computerChoice)
console.log(playerChoice)
console.log(playRound(playerChoice, computerChoice))
console.log(playerScore)
console.log(computerScore)