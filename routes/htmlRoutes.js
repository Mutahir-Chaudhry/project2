var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrder) {
      res.render("index", {
        msg: "Welcome!",
        workOrders: dbWorkOrder
      });
    });
  });

  // Load Work Order model
  app.get("/WorkOrder", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      dbWorkOrder
    ) {
      res.render("WorkOrder", {
        workOrders: dbWorkOrder
      });
    });
  });

  // Load Time Sheet Model
  app.get("/TimeSheet", function(req, res) {
    db.TimeSheet.findOne({ where: { id: req.params.id } }).then(function(
      dbTimeSheet
    ) {
      res.render("TimeSheet", {
        timeSheets: dbTimeSheet
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
