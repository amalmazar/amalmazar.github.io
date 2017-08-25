/*

X computer selects a random word from an array of words
  computer displays number of guesses left
  computer displays number of letters represented by _'s'
  user types one letter guess into a text box
  when user hits enter, letter is run through logic:
     if letter is in the random word, replace _ with letter
     else add guessed letter to list of incorrect letters and subtract 1 from guesses left
  when all the letters are guessed, show player-wins graphic and play music
  if guess count reaches 0, show player-loses graphic and play sad music

*/

// > TO DOS  
    // X. Make innerHTML for guessing-stage _'s equal to the number of letters in the randomWord
    // X. Subtract guesses from initialGuesses
    // X. Replace _'s with correctly guessed letters
    // 4. Turn random word into an array of letters
    // 5. put all guesses into an array, READ ARRAY TO PLACE INCORRECTLY GUESSED LETTERS INSTEAD OF DOING THE OTHER THING!
    
// > NICE TO HAVES
    // Hit enter to submit guess
    //Make it so only the alphabet counts as a guess.


// Array of words
    var words = ["boston", "shiba", "cat"];

    // Blank array of number of guesses
    var initialGuesses = 10;
    var guessedLetters = [];
        
// This function is run whenever the user presses a key.
    document.getElementById("guess-letter-box").onkeydown = function(event) {
        // Check if enter is pressed
        if (event.keyCode == 13) {
            // Determines which key was pressed.
            var userInput = document.getElementById("guess-letter-box").value;
            // Add letter to user input array
            guessedLetters.push(userInput);
            // Display guessed letters
            document.getElementById("incorrect-guesses-box").innerHTML = guessedLetters;        
            // Subtract one from initial guesses
            initialGuesses = initialGuesses - 1;
            // Display new initial guess count
            document.getElementById("Guesses-left").innerHTML = initialGuesses;
            // Shows guessed letter array in console
            console.log(guessedLetters);
            // Compare user input letter to random word *passing it through a hole in the wall*
            showCorrectLetters(userInput)
        }
    }
    
    
// Computer selects a random word from an array of words
    var randomWord = words[Math.floor(Math.random() * words.length)];

/*
// FIGURE OUT WHAT THIS DOES!!
    function randomWordLength(str) {
        var letters = 0;
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var ar = alphabet.split("");
        for (var i=0; i < str.length; i++) {
            if (ar.indexOf(str[i]) > -1) {
                letters = letters + 1;
            }
        }
        return letters;
    }
*/

// Computer counts letters from the random words and logs it to the console.
var randomWordLetters = randomWord.split("");
console.log(randomWordLetters)


    //Display number of letters represented by _ or correct letters
    function showCorrectLetters(userInput) {
        // Run user input letter through the random word letters to see if the match
        for (i = 0; i < randomWordLetters.length; i++) {
            // Check if user input letter matches random word letter
            if(userInput == randomWordLetters[i]) {
                // Show correct letter
                underscoresOrLetters += userInput;
            }
            else {
            // Show how many letters are in the random word with underscores
            underscoresOrLetters += "_ "
            }
        // Display underscores representing random word letters
        document.getElementById("guessing-stage").innerHTML = underscoresOrLetters;
        }
    } 
    // Create underscore as a blank string
    var underscoresOrLetters="";
    //showCorrectLetters();


    
/* Copy of function in case we break it.
//Display number of letters represented by _ or correct letters
    function showCorrectLetters() {
        //Loop to count letters in random word
        for (i = 0; i < randomWord.length; i++) {
            // Show how many letters are in the random word with underscores
            underscore += "_ "
        }
        // Display underscores representing random word letters
        document.getElementById("guessing-stage").innerHTML = underscore;
    } 
*/