let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";



function startGame() {

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
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
}


























// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🙂");
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳");
// } else {
//     console.log("You're out of the game! 😭");
// }

// let age = 22;

// if (age < 21) {
//     console.log("You can not enter the club.");
// } else {
//     console.log("Welcome to the club!");
// }

// let age = 100;

// if (age < 100) {
//     console.log("Not elegible");
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!");
// } else {
//     console.log("Not elegible, you have already gotten one");
// }