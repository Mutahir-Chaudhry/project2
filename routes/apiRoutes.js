var db = require("../models");

module.exports = function(app) {
  //Get all Work Orders
  app.get("/api/allworkorders", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all Time Sheets
  app.get("/api/alltimesheets", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all Users
  app.get("/api/allusers", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  // Create a new example
  app.post("/api/newworkorder", function(req, res) {
    db.Toad.create(req.body).then(function(dbToad) {
      res.json(dbToad);
    });
  });

  // Delete an example by id
  app.delete("/api/workorder/:id", function(req, res) {
    db.WorkOrder.destroy({ where: { id: req.params.id } }).then(function(
      dbWorkOrders
    ) {
      res.json(dbWorkOrders);
    });
  });
};
