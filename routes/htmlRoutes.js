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
  //Load New Work Order page
  app.get("/newWorkOrder", function(req, res) {
    res.render("newWorkOrder", {
      msg: "Create your new Work Order below!"
    });
  });
  //Load work order by id
  app.get("/workorder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      dbWorkOrder
    ) {
      res.render("workorder", {
        workOrder: dbWorkOrder
      });
    });
  });

  // Load Time Sheet Model // Load workOrder
  app.get("/TimeSheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(dbTimeSheet) {
      res.render("TimeSheet", {
        TimeSheet: dbTimeSheet
      });
    });
  });

  // Load Time Sheet Model // Load workOrder
  app.get("/workorder", function(req, res) {
    db.workOrder.findAll({}).then(function(dbWorkOrders) {
      res.render("workOrder", {
        WorkOrder: dbWorkOrders
      });
    });
  });
  // Load Time Sheet Model // Load workOrder
  app.get("/mainTimeSheet", function(req, res) {
    db.TimeSheet.findAll({}).then(function(dbmainTimeSheet) {
      res.render("mainTimeSheet", {
        mainTimeSheet: dbmainTimeSheet
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
