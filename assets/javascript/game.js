var wordBank = ["saturn"," mars","earth","curiosity","artemis","apollo","flare","hubble","rover","moon"];

var hideChar= "_";

var headerisplay = document.getElementById("headerDisp");
var wordDisplay = document.getElementById("wordDisp");
var letterDisplay = document.getElementById("letterDisp");
var guessDisplay = document.getElementById("guessdDisp");
var scoreDisplay = document.getElementById("scoreDisp");

var wordGuessGame= {
    word: "  ",
    guessedString: "",
    Wins: 0,
    Guesses: 0,
    guessLetters: [],
    imageId:"",
    gameStarted:false,

    newGame: function() {
        console.clear();
        // Add New Game to log
        var d = new Date();
        var n = d.toLocaleTimeString();

        console.log("New Game: " + n)
        console.log("-------------")

        var randSeed = Math.floor(wordBank.length*Math.random());
        this.word =  wordBank[randSeed];

        console.log("Index: " + randSeed);
        console.log("Word: " + this.word);

        this.guessedString=hideChar.repeat(this.word.length);

        console.log( this.guessedString);
        this.guessLetters= [];
        this.Guesses=10 ;

        //Create guessedString placeholder
        //this.guessedString=guessedString + repeat(word.length);
        console.log(this.guessedString)
        headerDisp.textContent = "Current Word: ";

        this.gameStarted = true;
    },


};

function writeLetters(params) {
    
}
document.onkeydown = function(event) {
//TODO: replace all event.key with  tolowerCase 
var muhGuess=event.key.toLocaleLowerCase();

//console.log(event.key);
//Auto Start On Key Press OR Force start
if (muhGuess==='`' || wordGuessGame.gameStarted===false) wordGuessGame.newGame();

if ((!wordGuessGame.guessLetters.includes(muhGuess)) && (event.keyCode >= 65 && event.keyCode <= 90)) {
    


    if (wordGuessGame.word.includes(muhGuess)) {
        
        wordGuessGame.guessedString[wordGuessGame.word.indexOf(muhGuess)]= muhGuess;

        console.log(wordGuessGame.word.indexOf(muhGuess));
        console.log("yoh queen");


        if (wordGuessGame.guessedString===wordGuessGame.word) {
            score++
            scoreDisp.textContent = score;
        }

    } else {
        wordGuessGame.guessLetters.push(muhGuess)


        wordGuessGame.Guesses--;
        if (wordGuessGame.Guesses<=0) wordGuessGame.newGame();

    }


} 

// if ((event.key in wordGuessGame.word) ) {
//     console.log('')
// } else {
    
// }
    //wordDisp.textContent = wordGuessGame.guessedString;
    guessDisp.textContent = wordGuessGame.Guesses;
    wordDisplay.textContent = event.key;
    wordDisplay.textContent = event.key;

};
