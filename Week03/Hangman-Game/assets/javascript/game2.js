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
    // 5. 
    
// > NICE TO HAVES
    // Hit enter to submit guess
    //Make it so only the alphabet counts as a guess.


// Array of words
    var words = ["boston", "shiba", "cat"];

// Number of guesses
    var initialGuesses = 10;
    var guessedLetters = [];
        
// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
       var userGuess = document.getElementById("guess").value;
            console.log(userGuess);


    // Adds user guess to the incorrect list
        function guessHandle() {
            //*Correct guess to-dos

            // Incorrect guess to-dos
                document.getElementById("incorrect").innerHTML += userGuess;
                initialGuesses = initialGuesses - 1;
                document.getElementById("Guesses-left").innerHTML = initialGuesses;
        }
        guessHandle()
        guessedLetters.push(userGuess);
        console.log(initialGuesses);
    }
    
// Computer selects a random word from an array of words
    var randomWord = words[Math.floor(Math.random() * words.length)];

// Computer counts letters from the random words and logs it to the console.
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

var randomWordLetters = randomWord.split("");
console.log(randomWordLetters)

//Computer displays number of letters represented by _.
    function answerSpots() {
        for (i = 0; i < randomWord.length; i++) {
            underscore += "_ "
        }
        document.getElementById("guessing-stage").innerHTML = underscore;
        
        //Computer shows correct  letters above the _
        document.getElementById("correct-letters").innerHTML = randomWordLetters.join(" ");
    } 

    var underscore="";
    answerSpots();


