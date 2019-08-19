var wordBank = ["saturn", "mars", "earth", "curiosity", "artemis", "apollo", "flare", "hubble", "rover", "moon"];

var hideChar = "_";

//var headerisplay = document.getElementById("headerDisp");
var wordDisplay = document.getElementById("wordDisp");
var letterDisplay = document.getElementById("letterDisp");
var guessDisplay = document.getElementById("guessdDisp");
var scoreDisplay = document.getElementById("scoreDisp");

function writeLetters(arr) {

    var outString = "";

    for (let index = 0; index < arr.length; index++) {
        outString += arr[index];
        //Exception for last item
        if (!(arr.length - 1 === index)) outString += ",";
    }
    letterDisp.textContent = outString;
}

function writeAnswer(arr) {

    var outString = "";

    for (let index = 0; index < arr.length; index++) {
        outString += arr[index];
        //Exception for last item
        if (!(arr.length - 1 === index)) outString += " ";
    }
    wordDisplay.textContent = outString;
}


var wordGuessGame = {
    word: "",
    guessedString: [],
    Wins: 0,
    Guesses: 0,
    guessLetters: [],
    imageId: "",
    gameStarted: false,

    newGame: function () {
        console.clear();
        //Clear old vars
        this.guessLetters=[];
        this.guessedString = [];
        //Reset Guesses
        this.Guesses = 10;
        //Start New Game
        this.gameStarted = true;

        // Add New Game to log
        var d = new Date();
        var n = d.toLocaleTimeString();

        console.log("New Game: " + n)
        console.log("-------------")

        var randSeed = Math.floor(wordBank.length * Math.random());
        this.word = wordBank[randSeed];

       // console.log("Index: " + randSeed);
       // console.log("Word: " + this.word);

        //Initialize array with 

        for (let index = 0; index < this.word.length; index++) {
            this.guessedString[index] = "_";

        }
        writeAnswer(wordGuessGame.guessedString);
        console.log(wordGuessGame.guessedString);


        scoreDisp.textContent = this.Wins;
        //Create guessedString placeholder
        //this.guessedString=guessedString + repeat(word.length);
        console.log(this.guessedString)
        headerDisp.textContent = "Current Word: ";

    },
    youWin: function () {
        
    }

};



document.onkeydown = function (event) {

    var muhGuess = event.key.toLocaleLowerCase();

    //console.log(event.key);
    //Auto Start On Key Press OR Force start
    if (muhGuess === '`' || wordGuessGame.gameStarted === false) wordGuessGame.newGame();

    if ((!wordGuessGame.guessLetters.includes(muhGuess)) && (event.keyCode >= 65 && event.keyCode <= 90)) {


        if (wordGuessGame.word.includes(muhGuess)) {

            for (var i = 0; i < wordGuessGame.word.length; i++) {
                if (wordGuessGame.word[i] === muhGuess) wordGuessGame.guessedString[i] = wordGuessGame.word[i];
            }

            //format outstring
            writeAnswer(wordGuessGame.guessedString);
           

        } else {
            wordGuessGame.guessLetters.push(muhGuess)
            writeLetters(wordGuessGame.guessLetters);
            wordGuessGame.Guesses--;
            if (wordGuessGame.Guesses <= 0) wordGuessGame.newGame();

        }

        if (wordGuessGame.guessedString.join("") === wordGuessGame.word) {
            wordGuessGame.Wins++
            scoreDisplay.textContent = wordGuessGame.Wins;
            
            wordGuessGame.newGame();
        }
    }

    // if ((event.key in wordGuessGame.word) ) {
    //     console.log('')
    // } else {

    // }
    //wordDisp.textContent = wordGuessGame.guessedString;
    guessDisp.textContent = wordGuessGame.Guesses;

};
