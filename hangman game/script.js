var words = ["one", "two", "three"];

var remainingGuesses = 10;

var incorrectGuesses = [];

var blank = [];

var word = "";



var randomWord = Math.floor((Math.random() * words.length));

console.log(randomWord);

function initiateGame() { for(var i=0; i < words[randomWord].length; i++) {
    blank.push("_"); 
        }
    document.getElementById("answer-letters").innerHTML = blank.join(" ");
    document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
     word = words[randomWord];
}
document.addEventListener("keypress", function(e) {
    var letter = String.fromCharCode(e.keyCode);
      for(var i=0;i<word.length;i++){
          if(word.charAt[i]===letter)
              {
                  blank[i]=letter;
                  incorrectGuesses.push(letter);
                  remainingGuesses--;
              }
          else{
              incorrectGuesses.push(letter);
              remainingGuesses--;
          }
      }
   document.getElementById("answer-letters").innerHTML = blank.join(" ");
document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
});

initiateGame();
