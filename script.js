
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: "Per",
    chips: 145
}

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}
console.log(getRandomCard());

function renderGame() {

    let messageEl = document.querySelector("#message-el");
    console.log(messageEl);

    let sumEl = document.querySelector("#sum-el");
    console.log(sumEl);

    let cardsEl = document.querySelector("#cards-el");
    console.log(cardsEl);

    let playerEl = document.querySelector("#player-el");
    console.log(playerEl);

    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ",";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

function startGame() {  
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}


