// PHASE ONE

    ////////////// HTML
        // 1. Create html skeleton with three pages
            // HOME (shows two button options to view tables or make reservation)
            // TABLES (shows current table reservations and waiting list)
            // RESERVE (shows a form to fill out a reservation)
            
    ////////////// JAVASCRIPT
        // 1. Initialize the following dependencies
                // Dependencies
                // =============================================================
                var express = require("express");
                var bodyParser = require("body-parser");
                var path = require("path");
        // 2. Require the other .js routing files for creating the api html pages
        // 3. Set up the express app with body parser
                // Sets up the Express App
                // =============================================================
                var app = express();
                var PORT = 3000;
                // Sets up the Express app to handle data parsing
                app.use(bodyParser.urlencoded({ extended: false }));
                app.use(bodyParser.json());
        // 4. Create array variables to hold data 
                var reservations = [{
                    name: "",
                    phone: "",
                    email: "",
                    uniqueID: 0,
                  }];
                  
        // 5. Convert received form data into JSON objects
        // 6. IN THE HTML FILE, POST (and push) information to the server array (using the bodyParser?)

    ////////////// EXPRESS
        // 1. Start by setting up code to say "Listening at PORT 300" when running the .js
        // 2. Create routes
            // 2. One route for posting data (this takes the above information and puts it into the server)
                app.post("/", function(req, res) {
                  res.sendFile(path.join(__dirname, "tables.html"));
                });
            // 3. Create one route for getting the data
                app.get("/reserve", function(req, res) {
                  res.sendFile(path.join(__dirname, "reserve.html"));
                });
            // 4. Create additional express routes to view all the pages (i.e. if a user visits localhost:3000/tables,      they should be shown the table.html page)
                app.get("/api/tables", function(req, res) {
                  res.sendFile(path.join(__dirname, "/api/tables.html"));
                });
                app.get("/api/waitlist", function(req, res) {
                  res.sendFile(path.join(__dirname, "/api/waitlist.html"));
                });
            // 5. Make it listen.

// PHASE 2
    ////////////// BACK END
        // 1. Create logic that handles reservation requests (use postman to help)
            // a. POST requests
                // 1. Take in JSON objects
                // 2. Check if there is any space left
                    // a. If YES, add the JSON object to the reservation array 
                    // b. If NO, add the JSON object to the waiting list

    ////////////// FRONT END
        // 1. Figure out how AJAX can be used to do GET and POST requests
        // 2. On tables.html
            // a. Create an AJAX funciton to retrieve data from the API