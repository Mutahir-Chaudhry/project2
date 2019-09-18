var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("index", {
        msg: "Welcome!",
        workOrder: results
      });
    });
  });
  //Load New Work Order page
  app.get("/newWorkOrder", function(req, res) {
    res.render("newWorkOrder", {
      msg: "Create your new Work Order below!"
    });
  });
  //Load work order by id
  app.get("/workorder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.render("workorder", {
        workOrder: results
      });
    });
  });

  // Load Time Sheet Model
  app.get("/timesheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.render("TimeSheet", {
        TimeSheet: results
      });
    });
  });
  // Load workOrder model
  app.get("/workorder", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("workOrder", {
        workOrder: results
      });
    });
  });
  // Load Main Time Sheet
  app.get("/maintimesheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.render("mainTimeSheet", {
        TimeSheet: results
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
