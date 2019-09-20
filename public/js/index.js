// Get references to page elements
var $WorkOrderName = $("#WorkOrder-Name");
var $WorkOrderDescription = $("#WorkOrder-Description");
var $WorkOrderList = $("#WorkOrder-List");
var $NewWorkOrder = $("#NewWorkOrder-Button");
// var $ViewWorkOrder = $("#viewWorkOrder");
// The API object contains methods for each kind of request we'll make
console.log("I'm connected");
var API = {
  saveWorkOrder: function(WorkOrder) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/workorder",
      data: JSON.stringify(WorkOrder)
    });
  },
  getWorkOrders: function() {
    return $.ajax({
      url: "/api/allworkorders",
      type: "GET"
    });
  },
  deleteWorkOrder: function(id) {
    return $.ajax({
      url: "/api/workorder/" + id,
      type: "DELETE"
    });
  },
  getTimeSheets: function() {
    return $.ajax({
      url: "/api/alltimesheets",
      type: "GET"
    });
  },
  getOneWorkOrder: function(id) {
    return $.ajax({
      url: "/api/workorder/" + id,
      type: "GET"
    });
  }
};

// handleFormSubmit is called whenever we submit a new workOrder
// Save the new workOrder to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var WorkOrder = {
    Name: $WorkOrderName.val().trim(),
    Description: $WorkOrderDescription.val().trim()
  };

  if (!(WorkOrder.Name && WorkOrder.Description)) {
    alert("You must enter an workOrder text and description!");
    return;
  }

  API.saveWorkOrder(WorkOrder).then(function() {
    location.reload();
  });

  $WorkOrderName.val("");
  $WorkOrderDescription.val("");
};

// handleDeleteBtnClick is called when a Work Order's delete button is clicked
var handleDeleteBtnClick = function() {
  console.log("Delete bnutton");
  // Remove desired Work Order by ID from Toad DB and refresh Work Order List
  var idToDelete = $(this).attr("data-id");

  API.deleteWorkOrder(idToDelete).then(function() {
    // refreshWorkOrders();
    location.reload();
  });
};

$NewWorkOrder.on("click", handleFormSubmit);
$WorkOrderList.on("click", ".delete", handleDeleteBtnClick);
// $WorkOrderList.on("click", ".viewWorkOrder", handleViewWorkOrderBtn);
