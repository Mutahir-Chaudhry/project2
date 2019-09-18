// Get references to page elements
var $WorkOrderName = $("#WorkOrder-Name");
var $WorkOrderDescription = $("#WorkOrder-Description");
var $WorkOrderList = $("#WorkOrder-List");
var $SubmitButton = $(".submit");
// The API object contains methods for each kind of request we'll make
var API = {
  saveWorkOrder: function(WorkOrder) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/workorders",
      data: JSON.stringify(WorkOrder)
    });
  },
  getWorkOrders: function() {
    return $.ajax({
      url: "api/workorders",
      type: "GET"
    });
  },
  deleteWorkOrder: function(id) {
    return $.ajax({
      url: "api/workorders/" + id,
      type: "DELETE"
    });
  }
};

// This method gets newly added Work Orders from Toad DB then repopulates Work Order List
var refreshWorkOrders = function() {
  API.getWorkOrders().then(function(data) {
    var $WorkOrders = data.map(function(WorkOrder) {
      var $a = $("<a>")
        .text(WorkOrder.Name)
        .attr("href", "/workorder/" + WorkOrder.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": WorkOrder.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("Complete");

      $li.append($button);

      return $li;
    });

    $WorkOrderList.empty();
    $WorkOrderList.append($WorkOrders);
  });
};

// handleFormSubmit is called whenever we submit a new workOrder
// Save the new workOrder to the db and refresh the list
var handleFormSubmit = function(event) {
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

  API.saveWorkOrder(WorkOrder).then(function() {
    refreshWorkOrders();
  });

  $WorkOrderName.val("");
  $WorkOrderDescription.val("");
};

// handleDeleteBtnClick is called when a Work Order's delete button is clicked
var handleDeleteBtnClick = function() {
  // Remove desired Work Order by ID from Toad DB and refresh Work Order List
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteWorkOrder(idToDelete).then(function() {
    refreshWorkOrders();
  });
};

// Add event listeners to the submit and delete buttons
// Added class to submit button to make it reusable
$SubmitButton.on("click", ".submit", handleFormSubmit);
$WorkOrderList.on("click", ".delete", handleDeleteBtnClick);
