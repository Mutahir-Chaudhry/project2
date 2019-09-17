var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.WorkOrder.findAll({}).then(function(dbWorkOrders) {
      res.render("index", {
        msg: "Welcome!",
        workOrder: dbWorkOrders
      });
    });
  });

  app.get("/workOrder/:id", function(req, res) {
    db.WorkOrder.findOne({ where: { id: req.params.id } }).then(function(
      dbWorkOrders
    ) {
      res.render("workOrder", {
        workOrder: dbWorkOrders
      });
    });
  });

  // // Load Time Sheet Model
  // app.get("/TimeSheet", function(req, res) {
  //   db.TimeSheet.findAll({}).then(function(dbTimeSheets) {
  //     res.render("TimeSheet", {
  //       TimeSheet: dbTimeSheets
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
