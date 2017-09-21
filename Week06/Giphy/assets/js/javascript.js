// 1. Array of chosen topics, giphy api url
var topics = ["black cat", "white cat", "rainbow cat"];

// 2. Create buttons in HTML
function createButtons() {
    $("#buttonbox").empty();
    for(var i = 0; i<topics.length; i++) {
        var newbutton = $("<button>");
        newbutton.addClass("gif-button");
        newbutton.addClass("btn");
        newbutton.attr("name", topics[i]);
        newbutton.text(topics[i]);
        $("#buttonbox").append(newbutton);
    }
}
createButtons();

$(document).ready(function() {
    $(document).on("click", ".gif-button", function() {
        var topic = this.name;
        displayGifs(topic);
    });
});

function displayGifs(topicName) {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=XmqZxBylvGzuKBRBfSUltCTXLqu3nfhF&limit=4";
    $.ajax({
        url: queryURL,
        method: 'GET',
        }).done(function(response) {
        createGifs(response);
    });
}

function createGifs(response) {
    $("#gifbox").empty();
    for (var i = 0; i < response.data.length; i++) {
        var stillGifURL = response.data[i].images.fixed_height_small_still.url;
        var animatedGifURL = response.data[i].images.fixed_height_small.url;
        var gifImage = $("<img>");
        gifImage.addClass("gif");
        gifImage.attr({
            "src": stillGifURL,
            "data-still": stillGifURL,
            "data-animated": animatedGifURL,
            "data-state": "still"});
        var gifInfo = $("<div>");
        gifInfo.addClass("rating");
        gifInfo.text("Rated: " + response.data[i].rating);
        $("#gifbox").append(gifImage, gifInfo);
    }
}

// 4. On click, switch the static image to an animated gif, on another click, switch animated gif to static gif
$(document).ready(function() {
    $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
});

// 5. Form that takes the value from a user input and adds it to the topics array
    $("#addgif").on("click", function(event) {
        event.preventDefault();
        var gif = $("#input").val().trim();
        topics.push(gif);
        createButtons();
    });

$(".catbutton").on("click", function(){
  console.log( "YOU TOUCHED THE BUTT!" );
});