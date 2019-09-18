var db = require("../models");

module.exports = function(app) {
  //Get all Work Orders
  app.get("/api/workOrders", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrders) {
      res.json(dbWorkOrders);
    });
  });

  app.post("/api/workOrders", function(req, res) {
    db.WorkOrder.create(req.body).then(function(dbWorkOrders) {
      res.json(dbWorkOrders);
    });
  });

  // // // Get all Time Sheets
  // app.get("/api/alltimesheets", function(req, res) {
  //   db.TimeSheet.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // // Get all Users
  // app.get("/api/allusers", function(req, res) {
  //   db.User.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // Create a new Work Order
  // app.post("/api/workOrders", function(req, res) {
  //   db.WorkOrder.post(req.body).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // Delete a Work Order
  // app.delete("/api/workorders/:id", function(req, res) {
  //   db.WorkOrder.destroy({ where: { id: req.params.id } }).then(function(
  //     results
  //   ) {
  //     res.json(results);
  //   });
  // });
};
