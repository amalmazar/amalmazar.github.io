var letter = require('./letter.js');
exports.meow = "rawr";
var cat = function() {
    //var meow = "meow";
};
var wordToGuess = "";


exports.wordObject = function(poo) {
    
    // console.log(poo);
    
    wordToGuess = poo;
    
    this.letters = [];
        
    this.addUnderscores = function() {
        for (var i = 0; i < wordToGuess.length; i++) {
            //console.log(wordToGuess[i]);
            this.letters.push( new letter.letterObject(wordToGuess[i]));
        }
    };
    this.addUnderscores();
    //console.log(this.letters);
};

exports.compareLetters = function(guessedLetter) {
    for (var i = 0; i < wordToGuess.length; i++) {
        //console.log(wordToGuess[i]);
        if (wordToGuess[i] === guessedLetter) {
            console.log("true");
        }
        else {
            console.log("false");
        }
        // compare if current letter in wordToGuess loop = user's guessed letter
    }
}

// take user input and compare it to all the letters in the wordtoguess
// we need each letter to know whether or not it was guessed
// 