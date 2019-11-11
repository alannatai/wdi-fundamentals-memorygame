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
var cardImg = document.getElementsByTagName('img');

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        //add onclick that cannot be clicked twice
        cardElement.setAttribute('onclick', 'flipCard(this); this.onclick=null;');
        document.getElementById('game-board').appendChild(cardElement);
    }
};

var checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        var score = document.getElementById('score-num');

        if (cardsInPlay[0] === cardsInPlay[1]) {
            outcomeMsg.textContent = "You found a match!";
            //add point to score
            score.textContent = gameScore++;
        } else {
            outcomeMsg.textContent = "Sorry, try again.";
        }
        //disable onclick after outcome message is displayed
        for (var i = 0; i < cardImg.length; i++) {
            cardImg[i].onclick = null;
        }
    }
};

var flipCard = (card) => {
    var cardId = card.getAttribute('data-id');

    card.setAttribute('src', cards[cardId].cardImage)
    console.log(`User flipped ${cards[cardId].rank}.`)
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
};

var gameReset = function() {
    for (var i = 0; i < cardImg.length; i++) {
        cardImg[i].setAttribute('src', 'images/back.png');
        cardImg[i].setAttribute('onclick', 'flipCard(this); this.onclick=null;');
    }
    outcomeMsg.textContent = null;
    cardsInPlay = [];
};

createBoard();