var wordBank = ["Saturn"," Mars","Earth","Curiosity","Artemis","Apollo","Flare","Hubble","Rover","Moon"];

var randSeed = Math.floor(wordBank.length*Math.random());

var wordDisplay = document.getElementById("headerDisp");
var wordDisplay = document.getElementById("wordDisp");
var wordDisplay = document.getElementById("letterDisp");
var wordDisplay = document.getElementById("guessdDisp");
var wordDisplay = document.getElementById("scoreDisp");

var wordGuessGame= {
    word: "",
    boolBois: [],
    Wins: 0,
    Guesses: 0,
    guessLetters: [],
    imageId:"",
    gameStarted:false,

    newGame: function() {

        var randSeed = Math.floor(wordBank.length*Math.random());
        console.log("Index: " + randSeed);
        console.log("Word " + wordBank[randSeed]);

         headerDisp.textContent = "Current Word: ";


         this.gameStarted = true;
    },


};


document.onkeydown = function(event) {

    //add auto start on key press
if (event.key ==='`') {
    wordGuessGame.newGame();
}

if ((event.key in word) && ) {
    
} else {
    
}

    wordDisplay.textContent = event.key;
    wordDisplay.textContent = event.key;
    wordDisplay.textContent = event.key;
    wordDisplay.textContent = event.key;

};
