var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];
var cardOne = "queen";
var cardTwo = "king";

cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.")
    }
}

console.log(`User flipped ${cardsInPlay[0]}`);
console.log(`User flipped ${cardsInPlay[1]}`);