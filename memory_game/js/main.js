var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var gameScore = 1;
var outcomeMsg = document.getElementById('outcome-message');

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};



var checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        var score = document.getElementById('score-num');
        //add card cover to prevent flipping
        var addCardCover = function() {
            var cover = document.createElement('div');
            cover.setAttribute('id', 'cover');
            document.getElementById('cover-board').appendChild(cover);
        };

        if (cardsInPlay[0] === cardsInPlay[1]) {
            outcomeMsg.textContent = "You found a match!";
            score.textContent = gameScore++;
            addCardCover();

        } else {
            outcomeMsg.textContent = "Sorry, try again.";
            addCardCover();
        }
    }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');

    this.setAttribute('src', cards[cardId].cardImage)
    console.log(`User flipped ${cards[cardId].rank}.`)
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
};

var gameReset = function() {
    var cardsReset = document.getElementsByTagName('img');

    for (var i = 0; i < cardsReset.length; i++) {
        cardsReset[i].setAttribute('src', 'images/back.png')
    }
    outcomeMsg.textContent = null;
    cardsInPlay = [];

    //remove card cover to allow flipping
    document.getElementById('cover-board').removeChild(cover);
};

createBoard();