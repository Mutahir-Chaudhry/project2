var db = require("../models");

module.exports = function(app) {
  // Load WorkOrder Model, then display Index.handlebars
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(results) {
      res.render("index", {
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
        msg: "Create your new Work Order below:",
        WorkOrder: results
      });
    });
  });
  //Load WorkOrder Model by id, then display ViewWorkOrder.handlebars
  app.get("/viewworkorder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.render("ViewWorkOrder", {
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

  // // Load TimeSheet Model, then display MainTimeSheet.handlebars
  // app.get("/viewworkorder", function(req, res) {
  //   db.TimeSheet.findAll({}).then(function(results) {
  //     res.render("ViewWorkOrder", {
  //       TimeSheet: results
  //     });
  //   });
  // });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
