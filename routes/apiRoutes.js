var db = require("../models");

module.exports = function(app) {
  // ------------------------------------------------ TIME SHEET ROUTES --------------------------------------------------------------
  // Find All Time Sheets
  app.get("/api/timesheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Create New Time Sheet
  app.post("/api/timesheet", function(req, res) {
    db.TimeSheet.post(req.body).then(function(results) {
      res.json(results);
    });
  });
  // Find One Time Sheet by ID
  app.get("/api/timesheet/:id", function(req, res) {
    db.TimeSheet.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });
  });
  // ------------------------------------------------ USER ROUTES --------------------------------------------------------------
  // Get all Users
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Find One User by ID
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
  // ------------------------------------------------ WORK ORDER ROUTES --------------------------------------------------------------
  //Get all Work Orders
  app.get("/api/workorder", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Find One Work Order by ID
  app.get("/api/workorder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });
  });
  // Create New Work Order
  app.post("/api/workorder", function(req, res) {
    db.WorkOrder.create(req.body).then(function(results) {
      res.json(results);
    });
  });
  // Delete Work Order by ID
  app.delete("/api/workorder/:id", function(req, res) {
    db.WorkOrder.destroy({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });
  });
};
