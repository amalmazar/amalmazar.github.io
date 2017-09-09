var catTrivia = {
    correctAnswerCount: 0,
    incorrectAnswerCount: 0,
    gameTimer: 0,
};

var selectedAnswer;
var seconds;
var questions = ["How heavy is the world's heaviest cat?", "What is usually true of tortiseshell cats?"];

var answers =
    [["50lb", "20lb", "5lb", "70lb"],
     ["They live an average of five years", "They are female", "They have extra claws", "They are the cutest cats"]];

function gameStart() {
    gameReset();
}

function gameReset() {
    $(".timeup").css('display', 'none');
    $(".start").css('display', 'block');
    $(".start").click(function() {
        $(".trivia-stage").css('display','block');
        $(".start").css('display','none');  
        $("#question").html(questions[0]);
        populateQuestionOneAnswers();
        run();
        seconds = 60;
    });
}

function populateQuestionOneAnswers() {
        $("#button1").html(answers[0][0]);
        $("#button2").html(answers[0][1]);
        $("#button3").html(answers[0][2]);
        $("#button4").html(answers[0][3]);
}

function checkAnswer(correctAnswer) {
    $("body").on("click", ".button", function(){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswer) {
        $(".popup").css('display', 'block');
        $("#correctOrIncorrect").html("You are correct!");
        $("#answer").html("The correct answer is " + correctAnswer);
        nextQuestion(questions[1], populateQuestionTwoAnswers());
        // after 5 seconds .css('display', 'none') and goToSecondQuestion();
	}
	else {
        $(".popup").css('display', 'block');
        $("#correctOrIncorrect").html("You are incorrect!");
        $("#answer").html("The correct answer is " + correctAnswer);
        nextQuestion(questions[1], populateQuestionTwoAnswers());
	}
});
}

function checkCorrectAnswers() {
    if($("#question").html(questions[0])) {
        checkAnswer(answers[0][0]); 
    }
    else if($("#question").html(questions[1])) {
        checkAnswer(answers[1][1]);
    }
}

function populateQuestionTwoAnswers() {
        $("#button1").html(answers[1][0]);
        $("#button2").html(answers[1][1]);
        $("#button3").html(answers[1][2]);
        $("#button4").html(answers[1][3]);
};

function nextQuestion(whichQuestion, whichAnswers) {
    $(".popup").click(function() {
        $(".trivia-stage").css('display','block');
        $(".popup").css('display','none');  
        $("#question").html(whichQuestion);
        whichAnswers;
    });
}



// timer stuff

$("#timer").text(seconds)
var intervalId;

function run() {
      intervalId = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#timer").html(seconds);
    if (seconds === 0) {
    stop();
    $(".timeup").css('display', 'block');
    $(".timeup").html("<p>Time's Up, you lose!</p>");
    $(".timeup").click(function() {
        gameReset();
    });
  }
}

function stop() {
    clearInterval(intervalId);
}

var currentTimerValue = seconds;

$("button").on("click", function(){
    //console.log(currentTimerValue);
});

gameStart();
checkCorrectAnswers();