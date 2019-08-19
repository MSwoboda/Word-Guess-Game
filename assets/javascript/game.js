var wordBank = ["Saturn"," Mars","Earth","Curiosity","Artemis","Apollo","Flare","Hubble","Rover","Moon"];



var wordDisplay = document.getElementById("headerDisp");
var wordDisplay = document.getElementById("wordDisp");
var wordDisplay = document.getElementById("letterDisp");
var wordDisplay = document.getElementById("guessdDisp");
var wordDisplay = document.getElementById("scoreDisp");

var wordGuessGame= {
    word: "  ",
    guessedString: "  ",
    Wins: 0,
    Guesses: 0,
    guessLetters: [],
    imageId:"",
    gameStarted:false,

    newGame: function() {
        console.clear();
        var d = new Date();
        var n = d.toLocaleTimeString();

        console.log("New Game:" + n)
        console.log("-------------")

        var randSeed = Math.floor(wordBank.length*Math.random());
        this.word =  wordBank[randSeed];

        console.log("Index: " + randSeed);
        console.log("Word " + this.word);

        this.Guesses=20;

        //Create guessedString placeholder
        //this.guessedString=guessedString + repeat(word.length);
        console.log(this.guessedString)
        headerDisp.textContent = "Current Word: ";

        console.log("New Game")

        this.gameStarted = true;
    },


};


document.onkeydown = function(event) {
console.log(event.key);
//Auto Start On Key Press
if (wordGuessGame.gameStarted===false) wordGuessGame.newGame();
//force new game
if (event.key==='`') wordGuessGame.newGame();


// if ((event.key in wordGuessGame.word) ) {
//     console.log('')
// } else {
    
// }

    wordDisplay.textContent = event.key;
    guessDisp.textContent = wordGuessGame.Guesses;
    wordDisplay.textContent = event.key;
    wordDisplay.textContent = event.key;

};
