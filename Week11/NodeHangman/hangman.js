
//---------------------required node bits----------------//
var fs = require('fs');
var word = require('./word.js');
var inquirer = require("inquirer");
//-------------------------------------------------------//

//--------------------some global variables---------------//
var words = ['tiger', 'cheetah', 'leopard'];
var remainingGuesses = "";
var randomWord = "";
//-------------------------------------------------------//

function resetRemainingGuesses() {
    remainingGuesses = 10;
};

function newGame() {
    // set random word
    randomWord = words[Math.floor(Math.random()* words.length)];
    // welcome user
    console.log("Welcome to Terminal Hangman!");
    // reset remaining guesses to original value
    resetRemainingGuesses();
}
    
function getGuess() {
    inquirer.prompt([
      {
        name: "guess",
        message: "Guess a letter!"
      }
    ]).then(function(answers) {
      console.log(answers);
      // insert function for comparing answer to word here
    });
};

newGame();

// need to find a way to create a variable without calling the function immediately?
var userGuess = getGuess();

word.wordObject(randomWord);

word.compareLetters(userGuess);



// 0. Initialize NPM and install inquirer
// 1. An array of random words in an array of letters 

// 2. A constructor that builds the object representing the random words (either as underscores or as letters) IN ITS OWN FILE, EXPORTED 
// 3. A constructor that takes the current word, and creates an object to display either the letter (if guessed) or a blank placeholder (if not guessed).IN ITS OWN FILE, EXPORTED

// 3. An inquire questionnare function for asking the user to guess
// 4. A variable for the number of remaining guesses.
// 5. A function that takes the user's guess
// 6. A function that compares the user's guess to the array of letters in the word they are guessing
// 7. A function that prompts the user to end the game if no guesses remain
