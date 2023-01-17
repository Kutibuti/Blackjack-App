let cards = []
let sum = 0
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got BJ"
        messageEl.textContent = message
        hasBlackjack = true
    } else {

        message = "You're out of the game."
        messageEl.textContent = message
        isAlive = false
    }
}


function startGame() {
    let isAlive = true
    for (let i = 0; i < 2; i++) {
        cards[i] = getRandomCard()
    }
    sum = cards[0] + cards[1]
    renderGame()
    console.log(hasBlackjack)
    console.log(message)

}


function newCard() {
    let newcard = getRandomCard()
    cards.push(newcard)
    sum += newcard
    if (isAlive === true) {
        renderGame()
    }
    if (sum > 21) {
        isAlive = false

    }
}

function getRandomCard() {
    let randomcard = Math.floor(Math.random() * 13) + 1
    if (randomcard > 10) {
        randomcard = 10
    } else if (randomcard === 1) {
        randomcard = 11
    }
    return randomcard
}




















