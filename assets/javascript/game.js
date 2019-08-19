var wordBank = ["Saturn"," Mars","Earth","Curiosity","Artemis","Apollo","Flare","Hubble","Rover","Moon"];

var randSeed = Math.floor(wordBank.length*Math.random());


var wordGuessObject= {
    word: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    driveAroundWorld: function() {

        console.log("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 24000;

        console.log("New Mileage: " + this.mileage);
        console.log("Car needs a tuneup!");

        this.isWorking = false;
    },

    getTuneUp: function() {
        console.log("Car is ready to go!");
        this.isWorking = true;
    },

    honk: function() {
        console.log("Honk! Honk!");
    }
};