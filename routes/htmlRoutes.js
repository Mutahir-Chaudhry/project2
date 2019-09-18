var db = require("../models");

module.exports = function(app) {
  // Load WorkOrder Model, then display Index.handlebars
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("Index", {
        msg:
          "Welcome! Here are all your existing Work Orders. Better get to work!",
        WorkOrder: results
      });
    });
  });
  // Load NewWorkOrder model, then display NewWorkOrder.handlebars
  app.get("/newworkorder", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("NewWorkOrder", {
        WorkOrder: results
      });
    });
  });
  //Load WorkOrder Model by id, then display WorkOrder.handlebars
  app.get("/workorder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.render("WorkOrder", {
        WorkOrder: results
      });
    });
  });

  // Load TimeSheet Model, then display TimeSheet.handlebars
  app.get("/newtimesheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.render("NewTimeSheet", {
        msg:
          "Clock-In, or Clock-Out, then leave a short message about your work day.",
        TimeSheet: results
      });
    });
  });
  // Load WorkOrder Model, then display WorkOrder.handlebars
  app.get("/workorder", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("WorkOrder", {
        WorkOrder: results
      });
    });
  });

  // Load TimeSheet Model, then display MainTimeSheet.handlebars
  app.get("/maintimesheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(results) {
      res.render("MainTimeSheet", {
        TimeSheet: results
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
