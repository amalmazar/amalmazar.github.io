////VARIABLES NEEDED
//1. var words = [];
//2. var lettersArray = [];
//3. Remaining guesses = 0;
//4. guessedLetter = "";


/////LOGIC 
//1. pickRandomWord() that
//    a. Chooses a random word from the words array and
//    b. uses that word to run blankWordConstructor()
//2. blankWordConstructor() that
//    a. Builds an array from the letters in the word
//3. makeBlanks() Function that 
//    a. Converts the blankWord letters into underscores and
//    b. Shows the letters in the DOM
//4. listener()
//    a. Listens for the user input, when a key is pressed
//    b. Puts the letter guessed into the guessedLetter variable
//5. matchLetter()
//    a. IF the guessedLetter matches one of the letters in our word THEN
//        1. Show which letter in the word they guessed instead of the blank
//    b. ELSE 
//        1. Remove one from number of guesses screen
//

var words = ["paws", "pounce", "purr", "meow", "tabby"];
var lettersArray = [];
var blanksArray = [];
var pressedKey = "";

function pickRandomWord() {
    //  a. Chooses a random word from the words array
    return words[Math.floor((Math.random() * words.length))];
    //  b. uses that word to run blankWordConstructor()
};

function blankWordConstructor() {
    // Run the pickRandomWord function to get the random word
    var word = pickRandomWord();
    // Console log the word to see if it's workin'
    console.log(word);
    // Loop through the word string, separate it into letters and push each lettter to the lettersArray 
    for(var i=0; i < word.length; i++) {
        lettersArray.push(word[i]);
    }
    // Console log the lettersArray to see if it's workin'
    console.log(lettersArray);
};

function makeBlanks() {
//    a. Loops through the lettersArray and pushes an underscore to blanksArray for every letter
    for(var i=0; i < lettersArray.length; i++) {
        blanksArray.push("_");
    }
    // Console log the lettersArray to see if it's workin'
    console.log(blanksArray);
}

blankWordConstructor();
makeBlanks();


// Populate the blanks into the D O M
$(document).ready(function(){
for(var i=0; i < blanksArray.length; i++) {
    $('#blanks').append(blanksArray[i] + " ");
    };
});


// Listen for key press, create variable for key which was pressed
$(function() {
    $(document).keypress(function(e) {
        var pressedKey = String.fromCharCode(e.which);
        console.log(pressedKey);
    
    // Checks to see if the pressed key matches any of the letters
    for(var i=0; i < lettersArray.length; i++) {
        if(pressedKey === lettersArray[i]) {
            console.log("Yes, " + pressedKey + " is equal to " + lettersArray[i]);
            // go through the letters array and find the first occurence of the letter matching the pressed key, then put it in the html somehow. :|
        } else {
            console.log("Nope.");
        }
    }
    });
});