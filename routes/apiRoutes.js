var db = require("../models");

module.exports = function(app) {
  app.get("/api/workOrders", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrders) {
      res.json(dbWorkOrders);
    });
  });

  // Get all Time Sheets
  app.get("/api/TimeSheets", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get all Users
  app.get("/api/Users", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/workOrders", function(req, res) {
    db.WorkOrder.post(req.body).then(function(dbWorkOrders) {
      res.json(dbWorkOrders);
    });
  });

  // Delete an example by id
  app.delete("/api/workOrders/:id", function(req, res) {
    db.dbWorkOrders
      .destroy({ where: { id: req.params.id } })
      .then(function(dbWorkOrders) {
        res.json(dbWorkOrders);
      });
  });
};
