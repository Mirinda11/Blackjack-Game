let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";



function renderGame() {

    let messageEl = document.querySelector("#message-el");
    console.log(messageEl);

    let sumEl = document.querySelector("#sum-el");
    console.log(sumEl);

    let cardsEl = document.querySelector("#cards-el");
    console.log(cardsEl);
    
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
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];

}

function startGame() {  
    renderGame();
}

function newCard() {

    console.log("Drawing a new card from the deck!");
    let newCard = 7;
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
}


//----------------- For loop -----------------
for (let i = 0; i <=cards.length; i++){
    console.log(cards[i]);
}

let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}