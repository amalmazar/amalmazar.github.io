////VARIABLES NEEDED
//1. var words = [];
//2. var lettersArray = [];
//3. Remaining guesses = 0;
//4. guessedLetter = "";


/////LOGIC 
//1. randomizer that
//    a. Chooses a random word from the words array and
//    b. uses that word to run blankWordConstructor()
//2. blankWordConstructor() that
//    a. Builds an array from the letters in the word
//3. makeBlanks() Function that 
//    a. Converts the blankWord letters into underscores and
//    c. Shows the letters in the DOM
//4. listener()
//    a. Listens for the user input, when a key is pressed:
//    b. Puts the letter guessed into the guessedLetter variable
//5. matchLetter()
//    a. IF the guessedLetter matches one of the letters in our word THEN
//        1. Show which letter in the word they guessed and 
//        2. Take the letter out of the guess box and 
//    b. ELSE 
//        1. Remove one from number of guesses screen
//
//        