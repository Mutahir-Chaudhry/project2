var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrder) {
      res.render("index", {
        msg: "Welcome!",
        workOrder: dbWorkOrder
      });
    });
  });

  // Load Work Order model
  app.get("/WorkOrder", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrder) {
      res.render("WorkOrder", {
        workOrder: dbWorkOrder
      });
    });
  });

  // Load Time Sheet Model
  app.get("/TimeSheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(dbTimeSheet) {
      res.render("TimeSheet", {
        TimeSheet: dbTimeSheet
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
