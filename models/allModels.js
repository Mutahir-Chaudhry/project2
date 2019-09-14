// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Work Order" model that matches up with DB
var WorkOrder = sequelize.define("WorkOrder", {
  Name: Sequelize.STRING,
  Description: Sequelize.STRING,
  Completed: Sequelize.BOOLEAN,
});

//Create a " Time Sheet" model that matches up with DB
var TimeSheet = sequelize.define("TimeSheets", {
  SartTime: Sequelize.STRING,
  EndTime: Sequelize.STRING,
  Description: Sequelize.BOOLEAN,
  WorkerId: Sequelize.INTEGER,
  UserId: Sequelize.INTEGER
});


//Create a "User" Table
var User = sequelize.define("User", {
  Name: Sequelize.STRING,

});
// Syncs with DB
WorkOrder.sync();
TimeSheet.sync();
User.sync();
// Makes the Book Model available for other files (will also create a table)
module.exports = WorkOrder;
module.exports = TimeSheet;
module.exports = User;
