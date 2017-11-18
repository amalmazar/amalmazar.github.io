var orm = require("./config/orm.js");

// Call the ORM functions using burger-specific input for the ORM

// find all the burgers!
orm.selectAll(burgers);

 module.exports = orm;