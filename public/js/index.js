// Get references to page elements
var $WorkOrderName = $("#WorkOrder-Name");
var $WorkOrderDescription = $("#WorkOrder-Description");
var $WorkOrderList = $("#WorkOrder-List");
var $SubmitWorkOrder = $("#submit");
// var $ViewWorkOrder = $("#viewWorkOrder");
// The API object contains methods for each kind of request we'll make
console.log("I'm connected");
var API = {
  saveWorkOrder: function (WorkOrder) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/workorder",
      data: JSON.stringify(WorkOrder)
    });
  },
  getWorkOrders: function () {
    return $.ajax({
      url: "/api/allworkorders",
      type: "GET"
    });
  },
  deleteWorkOrder: function (id) {
    return $.ajax({
      url: "/api/workorder/" + id,
      type: "DELETE"
    });
  },
  getTimeSheets: function () {
    return $.ajax({
      url: "/api/alltimesheets",
      type: "GET"
    });
  },
  getOneWorkOrder: function (id) {
    return $.ajax({
      url: "/api/workorder/" + id,
      type: "GET"
    });
  }
};

var HTML = {
  getWorkOrder: function(id) {
    $.ajax({
      url: "/viewworkorder/" + id,
      type: "GET"
    }).then(console.log(id));
  }
};

// This method gets newly added Work Orders from Toad DB then repopulates Work Order List
var refreshWorkOrders = function () {
  API.getWorkOrders().then(function (data) {
    var $WorkOrders = data.map(function (WorkOrder) {
      var $FirstDiv = $("<div>").attr({ class: "row" });

      var $id = $("<strong>")
        .text("#")
        .attr(WorkOrder.id)
        .append($id);

      var $SecondDiv = $("<div>").attr({ class: "row" });

      var $ClientName = $("<strong>")
        .text("Client Name:")
        .attr(WorkOrder.Name)
        .append($ClientName);

      var $ThirdDiv = $("<div>").attr({
        class: "row"
      });

      var $Description = $("<strong>")
        .text("W.O Description:")
        .attr(WorkOrder.Description)
        .append($Description);

      var $FourthDiv = $("<div>").attr({ class: "row" });

      var $Completed = $("<strong>")
        .text("Completed:")
        .attr(WorkOrder.Completed)
        .append($Completed);

      var $li = $("<li>")
        .attr({
          class: "list-group-items",
          "data-id": WorkOrder.id
        })
        .append($FirstDiv)
        .append($SecondDiv)
        .append($ThirdDiv)
        .append($FourthDiv);

      // var $ButtonsRow = $("<div>").attr({ class: "row" });

      // var $FirstButtonCol = $("<div>")
      //   .attr({ class: "col" })
      //   .append($ButtonsRow);

      // var $DeleteButton = $("<button>")
      //   .addClass("btn btn-danger delete")
      //   .text("Delete Work Order")
      //   .append($FirstButtonCol);

      // var $NewTimeSheetButton = $("<button>")
      //   .addClass("btn btn-success")
      //   .text("Time Sheet");

      return $li;
    });

    $WorkOrderList.empty();
    $WorkOrderList.append($WorkOrders);
  });
};

// handleFormSubmit is called whenever we submit a new workOrder
// Save the new workOrder to the db and refresh the list
var handleFormSubmit = function (event) {
  //There should be a way to generalize this handler to be used on ALL submit buttons not just WO submit.
  event.preventDefault();
  var WorkOrder = {
    //Change $NewWorkOrderButton to $SubmitButton, then add var TimeSheet = {startTime: $StartTime, endTime: $EndTime, Description: $TimeSheetDescription}
    Name: $WorkOrderName.val().trim(),
    Description: $WorkOrderDescription.val().trim()
  };

  if (!(WorkOrder.Name && WorkOrder.Description)) {
    alert(
      "Please enter your Clients name for this Work Order and add a Description of the Work Order!"
    );
    return;
  }

  API.saveWorkOrder(WorkOrder).then(function () {
    refreshWorkOrders();
  });

  $WorkOrderName.val("");
  $WorkOrderDescription.val("");
};

// handleDeleteBtnClick is called when a Work Order's delete button is clicked
var handleDeleteBtnClick = function () {
  console.log("Delete bnutton");
  // Remove desired Work Order by ID from Toad DB and refresh Work Order List
  var idToDelete = $(this).attr("data-id");

  API.deleteWorkOrder(idToDelete).then(function () {
    // refreshWorkOrders();
    location.reload();
  });
};

var handleViewWorkOrderBtn = function (event) {
  
  $.ajax({
    url: "ViewWorkOrder"
  })
  // event.preventDefault();
  // console.log("View Work Order Button");
  // console.log(this);
  // console.log($(this).data("id"));
  // var idToView = $(this).data("id");
  // console.log(idToView);
  // HTML.getWorkOrder(idToView);
};

$SubmitWorkOrder.on("click", handleFormSubmit);
$WorkOrderList.on("click", ".delete", handleDeleteBtnClick);
$WorkOrderList.on("click", ".viewWorkOrder", handleViewWorkOrderBtn);
