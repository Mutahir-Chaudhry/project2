var db = require("../models");

module.exports = function(app) {
  app.get("/api/allWorkOrders", function (req, res) {
    db.WorkOrder.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get all Time Sheets 
  app.get("/api/allTimeSheets", function (req, res) {
    db.TimeSheet.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get all Users
  app.get("/api/allUsers", function (req, res) {
    db.Users.findAll({}).then(function (results) {
      res.json(results);
    });
  });


  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
