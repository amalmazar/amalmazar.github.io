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
    goodFortune: [
        "your luck is increasing",
        "today is a good day to make big decisions",
        "love will enter your life soon",
        "it is time for a fresh start",
        "a lifetime friend will soon be made",
        "your luck is great, donut calories will not count today"
    ],
    badFortune: [
        "your luck is diminishing",
        "today is not a day to make big decisions, wait until tomorrow",
        "mecury is in retrograde, avoid risks in communication",
        "didn't your mother tell you not to pick your nose?",
        "do not choose a career in simple math",
        "if a friend questions your loyalty today, they are your enemy-beware",
    ]
}

function initializeGame() {
    playGameSounds("assets/sound/music.mp3")
    playGameSounds.volume = .05;
    resetGame();
}

function showRealCrystals() {
    ($(".real-crystal").show());
    ($(".dummy-crystal").hide());
}

function hideRealCrystals() {
    ($(".real-crystal").hide());
    ($(".dummy-crystal").show());
}

function resetGame() {
    showRealCrystals();
    randomGoodFortune();
    randomBadFortune();
    crystalGame.goalValue = calculateGoalValue(19,120);
    crystalGame.playerValue = 0;
    document.getElementById("goalValue").innerHTML = crystalGame.goalValue;
    document.getElementById("playerValue").innerHTML = crystalGame.playerValue;
    toggleGameStatusSign("#winnerSign", 'none');
    toggleGameStatusSign("#loserSign", 'none');
    setCrystalValues();
    console.log(crystalGame.crystalValues);
}

// Determines random crystal value
function setCrystalValues() {
    for(var i = 0; i < crystalGame.crystalValues.length; i++) {
        crystalGame.crystalValues[i] = generateCrystalValue(1,12);
    }
}

// Object constructor for crystals, with random number generator inside of it.
var generateCrystalValue = function(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

// Click crystals to make sound and add value to player count

$(".orange-crystal-box").click(function() {
    playGameSounds("assets/sound/chime4.wav");
    addToPlayerValue(crystalGame.crystalValues[0]);
});
$(".green-crystal-box").click(function() {
    playGameSounds("assets/sound/chime4.wav");
    addToPlayerValue(crystalGame.crystalValues[1]);
});
$(".red-crystal-box").click(function() {
    playGameSounds("assets/sound/chime4.wav");
    addToPlayerValue(crystalGame.crystalValues[2]);
});
$(".blue-crystal-box").click(function() {
    playGameSounds("assets/sound/chime4.wav");
    addToPlayerValue(crystalGame.crystalValues[3]);
});


// Our randomly generated goalValue
var calculateGoalValue = function(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

// Constructs audio
function playGameSounds(soundFile){
    var audio = new Audio(soundFile);
    audio.play();
}

// You can put anything into a function you pass parameters into, because it's essentially just a placeholder.
function addToPlayerValue(butt) {
     crystalGame.playerValue = butt + crystalGame.playerValue;
     document.getElementById("playerValue").innerHTML = crystalGame.playerValue;
     determineWinOrLoss();
}

function determineWinOrLoss() {
    if(crystalGame.playerValue === crystalGame.goalValue) {
        hideRealCrystals();
        crystalGame.winCount++;
        document.getElementById("fortune").innerHTML = randomGoodFortune();
        showWinOrLoss("winCount", crystalGame.winCount);
        toggleGameStatusSign("#winnerSign", 'block');
    }
    else if(crystalGame.playerValue > crystalGame.goalValue) {
        hideRealCrystals();
        crystalGame.loseCount++;
        document.getElementById("fortune2").innerHTML = randomBadFortune();
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

// Get random fortune
function randomGoodFortune() {
   return crystalGame.goodFortune[Math.floor(Math.random()*crystalGame.goodFortune.length)];

}

function randomBadFortune() {
    return crystalGame.badFortune[Math.floor(Math.random()*crystalGame.badFortune.length)];
}

userReset();
initializeGame();