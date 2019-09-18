// Get references to page elements
var $workOrderName = $("#workOrder-name");
var $workOrderDescription = $("#workOrder-description");
var $workOrderList = $("#workOrder-list");
//createWorkOrder button is new. I have no idea what im doing for the Jquery lool
var $newWorkOrder = $("#newWorkOrderButton");
// The API object contains methods for each kind of request we'll make
var API = {
  saveWorkOrder: function(workOrder) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/workOrders",
      data: JSON.stringify(workOrder)
    });
  },
  getWorkOrders: function() {
    return $.ajax({
      url: "api/workOrders",
      type: "GET"
    });
  },
  deleteWorkOrder: function(id) {
    return $.ajax({
      url: "api/workOrders/" + id,
      type: "DELETE"
    });
  }
};

// refreshworkOrders gets new workOrders from the db and repopulates the list
var refreshWorkOrders = function() {
  API.getWorkOrders().then(function(data) {
    var $workOrders = data.map(function(workOrder) {
      var $a = $("<a>")
        .text(workOrder.name)
        .attr("href", "/workOrder/" + workOrder.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": workOrder.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("Complete");

      $li.append($button);

      return $li;
    });

    $workOrderList.empty();
    $workOrderList.append($workOrders);
  });
};

// handleFormSubmit is called whenever we submit a new workOrder
// Save the new workOrder to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var workOrder = {
    name: $workOrderName.val().trim(),
    description: $workOrderDescription.val().trim()
  };

  if (!(workOrder.name && workOrder.description)) {
    alert("You must enter an workOrder text and description!");
    return;
  }

  API.saveWorkOrder(workOrder).then(function() {
    refreshWorkOrders();
  });

  $workOrderName.val("");
  $workOrderDescription.val("");
};

// handleDeleteBtnClick is called when an workOrder's delete button is clicked
// Remove the workOrder from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteWorkOrder(idToDelete).then(function() {
    refreshWorkOrders();
  });
};

// Add event listeners to the submit and delete buttons
$newWorkOrder.on("click", handleFormSubmit);
// $workOrderList.on("click", "#delete", handleDeleteBtnClick);
$(".delete").on("click", handleDeleteBtnClick);
