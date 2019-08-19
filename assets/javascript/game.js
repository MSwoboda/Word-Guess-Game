var wordBank = ["saturn", "mars", "earth", "curiosity", "artemis", "apollo", "skylab", "hubble", "spirit", "landsat","endeavour"];
var imgBank = ["apollo.jpg","mars.jpg","earth.jpg","curiosity.jpg","artemis.jpg","apollo.jpg","skylab.jpg","hubble.jpeg","spirit.jpg","landsat.jpg","endeavour.jpg"]
var factBank = ["Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
"Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon",
"NASA’s Earth Science Division (ESD) missions help us to understand our planet’s interconnected systems, from a global scale down to minute processes. Working in concert with a satellite network of international partners, ESD can measure precipitation around the world, and it can employ its own constellation of small satellites to look into the eye of a hurricane. ESD technology can track dust storms across continents and mosquito habitats across cities.",
"Curiosity is a car-sized rover designed to explore the crater Gale on Mars as part of NASA's Mars Science Laboratory mission. Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars on August 6.",
"The Artemis program is an ongoing crewed spaceflight program carried out by NASA, U.S. commercial spaceflight companies, and international partners such as ESA, with the goal of landing 'the first woman and the next man' on the lunar south pole region by 2024.",
"The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration, which succeeded in landing the first humans on the Moon from 1969 to 1972.",
"Skylab was the first space station launched and operated by NASA, occupied for about 24 weeks between May 1973 and February 1974. It was the only space station that the United States has operated exclusively. It fell back to Earth amid worldwide media attention in 1979.",
"ASA's Hubble Space Telescope is the first astronomical observatory placed into orbit around Earth with the ability to record images in wavelengths of light spanning from ultraviolet to near-infrared. Hubble was launched on April 24, 1990, in the cargo bay of Space Shuttle Discovery and deployed the following day.",
"Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from 2004 to 2010.[2] It was one of two rovers of NASA's Mars Exploration Rover Mission. It landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in a 'sand trap' in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was sent on March 22, 2010.",
"This joint NASA/USGS program provides the longest continuous space-based record of Earth’s land in existence. Every day, Landsat satellites provide essential information to help land managers and policy makers make wise decisions about our resources and our environment.",
"Space Shuttle Endeavour is a retired orbiter from NASA's Space Shuttle program and the fifth and final operational Shuttle built. It embarked on its first mission, STS-49, in May 1992 and its 25th and final mission, STS-134, in May 2011.",
]

var audio = new Audio('assets/sounds/golfclap.mp3');

var hideChar = "_";

//var headerisplay = document.getElementById("headerDisp");
var wordDisplay = document.getElementById("wordDisp");
var letterDisplay = document.getElementById("letterDisp");
var guessDisplay = document.getElementById("guessdDisp");
var scoreDisplay = document.getElementById("scoreDisp");
var imgDisplay = document.getElementById("myImg");

var randSeed;

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

        randSeed = Math.floor(wordBank.length * Math.random());
        this.word = wordBank[randSeed];

       // console.log("Index: " + randSeed);
       console.log("Word: " + this.word);

        //Initialize array with 

        for (let index = 0; index < this.word.length; index++) {
            this.guessedString[index] = "_";

        }
        writeAnswer(wordGuessGame.guessedString);
       // console.log(wordGuessGame.guessedString);


        scoreDisp.textContent = this.Wins;
        //Create guessedString placeholder
        //this.guessedString=guessedString + repeat(word.length);
        console.log(this.guessedString)
        headerDisp.textContent = "Current Word: ";

    },
    youWin: function () {
        audio.play();
        wordGuessGame.Wins++
        scoreDisplay.textContent = wordGuessGame.Wins;

        myImg.src ="assets/images/"+imgBank[randSeed];
        funfactDisp.textContent = factBank[randSeed];
        wordGuessGame.newGame();

    }

};



document.onkeydown = function (event) {

    if (event.key==="/") wordGuessGame.youWin(); 
    
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
          
            wordGuessGame.youWin();
        }
    }

    // if ((event.key in wordGuessGame.word) ) {
    //     console.log('')
    // } else {

    // }
    //wordDisp.textContent = wordGuessGame.guessedString;
    guessDisp.textContent = wordGuessGame.Guesses;

};
