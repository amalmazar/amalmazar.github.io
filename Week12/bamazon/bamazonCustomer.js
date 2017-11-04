var mysql = require("mysql");
var inquirer = require('inquirer');

// Create a variable object for our database connection with all the little details
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// Function to connect to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadID + "\n");
    storeFront();
});

// Function to start the transaction; display items and prompt a user's input
function storeFront() {
    // 1. Welcome user to Bamazon
    console.log("Welcome to Bamazon!");
    
    // 2. Display all items with details
    // 3. Ask user to select an item with quantity they want to purchase
    inquirer.prompt([
      {
        type: "checkbox",
        name: "items",
        message: "Please select a pet",
        choices: 
          [ 
              {
            name: "cat"
              },
              {
            name: "dog"
              },
              {
            name: "bird"
              },
              {
            name: "fish"
              }
          ]
      }
    
    ]).then(function (answer) {
        console.log(answer.items);
        checkQuantity(answer);
    });
     
}

function checkQuantity(answer) {
    
    console.log("Checking quantities...");
    
    // 1. Check current quantity for selected item
        // Connect to the database and query the connection
        connection.query("SELECT pet_type, price, stock_quantity FROM pets", function(err, res) {
            if (err) throw err;
            if (answer.items == "dog") {
                console.log("woof");
              }
            else if(answer.items == "cat") {
                console.log("meow");
              }
            else if(answer.items == "bird") {
                console.log("tweet");
              }
            else {
                console.log("blubblub");
            }
        // a. IF sufficcient quanitity:
            // i. Ask user if they would like to purchase
                // 1. IF YES, continue to processPurchase() with parameters item and quantity
                // 2. IF NO, run welcome()
        // b. ELSE (insufficient quantity):
            // i. Tell user insufficient quantity, and run storeFront()
        });
};
                         

function showCost(item, quantity) {
    // 1. Pull relevant prices from database and calculate total cost
    // 2. Show user their total cost, and ask if they would like to proceed
            // a. IF YES, run processPurchase(item, quantity)
            // b. IF NO, run storeFront()
}

function processPurchase(item, quantity) {
    // 1. Subtract item(s) from database and congratulate user on their purchase
    // 2. Run storeFront()
};