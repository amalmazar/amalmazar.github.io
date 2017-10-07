/* global firebase moment */

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGtOw1Wwy6uV_pV0sXTpW4V8etPg3iV8M",
    authDomain: "train-scheduler-dee23.firebaseapp.com",
    databaseURL: "https://train-scheduler-dee23.firebaseio.com/",
    projectId: "train-scheduler-dee23",
    storageBucket: "",
    messagingSenderId: "514185750655"
  };

  firebase.initializeApp(config);

var database = firebase.database();

var trainName = [];
var destination = [];
var firstTrainTime = [];

database.ref().on('value',function(snapshot) {
    searches = snapshot.val();
              
});

$("#add-train").on("click", function() {
  // Get the input values
  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var startTime = $("#start-time").val().trim();
  var frequency = $("#frequency").val().trim();
  //var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");

  // Log the Bidder and Price (Even if not the highest)

  var newTrain = {
      trainName: trainName,
      destination: destination,
      startTime: startTime,
      frequency: frequency
    };
    
    database.ref().push(newTrain);

    // Change the HTML to reflect the new high price and bidder
    $("#name").html(trainName);
    $("#destination").html(destination);
    $("#freq").html(frequency);
});