const messageEl = document.getElementById("message-el")
const cardEl = document.getElementById("card-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
let hasBlackjack = false
let isAlive = false
let sum = 0
let cards = []
let message = ""
player = {
    name: "Nelson",
    winnings: 10000
}

function getGeneratedCard() {
    let card = Math.floor( Math.random() * 13) + 1
    return card
}

function renderGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
        printCards()
    } else if (sum === 21) {
        message = "BlackJack!"
        hasBlackjack = true
        printCards()
        playerEl.textContent = player.name + ": $" + player.winnings

    } else {
        message = "You are out of the game"
        printCards()
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function printCards() {
    let cardString = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        cardString += cards[i] + " "
    }
    cardEl.textContent = cardString
}

function startGame() {
    isAlive = true
    playerEl.textContent = ""
    const firstNum = getGeneratedCard()
    const secondNum = getGeneratedCard()
    cards = [firstNum, secondNum]
    sum = firstNum + secondNum
    renderGame()
}

function newCard() {
    if( hasBlackjack === false && isAlive === true ) {
        const card = getGeneratedCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}