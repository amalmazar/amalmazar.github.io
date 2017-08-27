/* ////////////////////////// CRYSTAL COLLECTOR GAME ///////////////////////////  */

// Player is presented with four CRYSTALS with unknown--randomly generated--VALUES. (crystalValues)
// Player is presented with a randomly generated number. (goalValue)
// Player is presented with a number of games won and a number of games lost.
// The player must click the crystals.
// The clicked crystal values are added up to make a score. (score)
// If the player's score adds up to greater than the goal value, the player loses.
// If the player's score adds up to match exactly the goal value, the player wins.
// When player wins or loses
   // 1. A win or lose graphic is shown and a sound is played
   // 2. The games won / games lost values are updated accordingly
   // 3. The crystals are given new random values
   // 4. The goal value is given a new random value

// Nice to Haves:
   // 1. Sound effects
   // 2. Animations and hover effects
   // 3. A second level that is somehow more challenging
   // 4. Sunset-style sky-blue to orange gradient background with subtle, animated crystal gif overlay
   // 5. Crystal ball to hold the random number
   // 6. Style the audio control: https://stackoverflow.com/questions/4126708/is-it-possible-to-style-html5-audio-tag

/* ////////////////////////// PSEUDOCODE ///////////////////////////  */

// Objects to create: 
   // X. Four crystals (orangeCrystal, redCrystal, etc...) 
      // X. With a function that creates a random number (crystalValue)
      // X. With a hover function to switch image when hovered and clicked.
      // X. Associate the crystal variables to the divs holding the crystals.
      // X. Make the divs clickable with hover effect
      // X. Make the click send the random value to an array
   // X. The goalValue!
      // X. Get goal value to show in a div

// Global variables to create:
   // x. An array of values from user input (crystalValues)

// Global functions to create:
   // 1. Sum of the crystalValues array items - possibly a for-loop. crystalSum
   // 2. A function to compare the crystalSum to the goalValue
      // a. else if crystalSum is equal to goalValue...
         // 1. Alert user of win status
         // 2. Add one to win
         // 3. Restart game
            // 1. Generate new random numbers for crystals
            // 2. Generate new random number for goalValue
      // b. else if crystalSum is greater than goalValue
         // 1. Alert user of lose status
         // 2. Add one to lose
         // 3. Restart game
            // 1. Generate new random numbers for crystals
            // 2. Generate new random number for goalValue

/* ////////////////////////// THE GAME ///////////////////////////*/ 
var crystalGame = {
    goalValue: 0,
    playerValue: 0,
    winCount: 0,
    loseCount: 0,
    crystalValues: [0, 0, 0, 0],
    minCrystalValue: 1,
    maxCrystalValue: 12,
}

function initializeGame() {
    resetGame();
}

function resetGame() {
    crystalGame.goalValue = calculateGoalValue.randomValueFromRange(19,120);
    crystalGame.playerValue = 0;
    document.getElementById("goalValue").innerHTML = crystalGame.goalValue;
    document.getElementById("playerValue").innerHTML = crystalGame.playerValue;
    toggleGameStatusSign("#winnerSign", 'none');
    toggleGameStatusSign("#loserSign", 'none');
    setCrystalValues();
}

function setCrystalValues() {
    for(var i = 0; i < crystalGame.crystalValues.length; i++) {
        crystalGame.crystalValues[i] = generateCrystalValue(crystalGame.minCrystalValue,crystalGame.maxCrystalValue);
    }
}

// Object constructor for crystals, with random number generator inside of it.
var generateCrystalValue = function(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

// Our randomly generated goalValue
var calculateGoalValue = {
         randomValueFromRange : function(min, max) {
            return Math.floor(Math.random()*(max-min)+min);
         }
}

function clickSound(soundFile){
    var audio = new Audio(soundFile);
    audio.play();
 }

$("#orange-crystal-box").click(function() {
        clickSound("assets/sound/chime1.wav");
        addToPlayerValue(crystalGame.crystalValues[0]);
    });
$("#green-crystal-box").click(function() {
        clickSound("assets/sound/chime2.wav");
        addToPlayerValue(crystalGame.crystalValues[1]);
    });
$("#red-crystal-box").click(function() {
        clickSound("assets/sound/chime3.wav");
        addToPlayerValue(crystalGame.crystalValues[2]);
    });
$("#blue-crystal-box").click(function() {
        clickSound("assets/sound/chime4.wav");
        addToPlayerValue(crystalGame.crystalValues[3]);
    })


function addToPlayerValue(butt) {
     crystalGame.playerValue = butt + crystalGame.playerValue;
     document.getElementById("playerValue").innerHTML = crystalGame.playerValue;
     determineWinOrLoss();
}

function determineWinOrLoss() {
    if(crystalGame.playerValue === crystalGame.goalValue) {
        crystalGame.winCount = crystalGame.winCount + 1;
        showWinOrLoss("winCount", crystalGame.winCount);
        toggleGameStatusSign("#winnerSign", 'block');
    }
    else if(crystalGame.playerValue > crystalGame.goalValue) {
        crystalGame.loseCount = crystalGame.loseCount + 1;
        showWinOrLoss("lossCount", crystalGame.loseCount);
        toggleGameStatusSign("#loserSign", 'block');
            }
}

function showWinOrLoss(idOfHtmlElement, winOrLossCount) {
    document.getElementById(idOfHtmlElement).innerHTML = winOrLossCount;
}

function toggleGameStatusSign(signName, displayStatus) {
    $(signName).css('display', displayStatus);
}

function userReset() {
    $("#winnerSign").click(function() {
        resetGame();
    });
    $("#loserSign").click(function() {
        resetGame();
    });
}

userReset()
initializeGame();
console.log(crystalGame);

var audio = new Audio('assets/sound/music.mp3');
audio.play();

/*///////////////////////// DO NOT NEED, but keeping for reference ///////////////////////////////
        
// Objects for each of the crystals, with random numbers inside of them
var orangeCrystal = {
         randomValueFromRange : function(min, max) {
            return Math.floor(Math.random()*(max-min)+min);
         }
}
var greenCrystal = {
         randomValueFromRange : function(min, max) {
            return Math.floor(Math.random()*(max-min)+min);
         }
}
var redCrystal = {
         randomValueFromRange : function(min, max) {
            return Math.floor(Math.random()*(max-min)+min);
         }
}
var blueCrystal = {
         randomValueFromRange : function(min, max) {
            return Math.floor(Math.random()*(max-min)+min);
         }
}

// Creates a variable for the crystal's values
var orangeCrystalValue = orangeCrystal.randomValueFromRange(1, 12);
var greenCrystalValue = greenCrystal.randomValueFromRange(1, 12);
var redCrystalValue = redCrystal.randomValueFromRange(1, 12);
var blueCrystalValue = blueCrystal.randomValueFromRange(1, 12);
     
// Checking the functionality of the crystal objects
console.log(orangeCrystalValue + " is the orange crystal's value.");
console.log(greenCrystalValue + " is the green crystal's value.");
console.log(redCrystalValue + " is the red crystal's value.");
console.log(blueCrystalValue + " is the blue crystal's value.");


// When mousing over the crystals, show their hover state
//$( "#col-md-3 orange-crystal-box" ).mouseover(function(){
//    $(this).css("background-color", "red");
//    });

/*//////////////////////////////////////////////////////////////////////////////////////*/