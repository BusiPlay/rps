console.log("Hello World")

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

function getComputerChoice() {
    var computerChoice =  getRandomInt(1,3)
    switch (computerChoice) {
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissors"
    }
}

function getPlayerChoice() {
    var playerChoice = prompt("Enter a choice: ")
    var validChoices = ["rock", "paper", "scissors"]
    while (!(validChoices.includes(playerChoice.toLowerCase()))) {
        playerChoice = prompt("That is not a valid response. Please try again: ")
    }
    return playerChoice.toLowerCase()
}

var computerChoice = getComputerChoice();
console.log(computerChoice)
var playerChoice = getPlayerChoice()
console.log(playerChoice)