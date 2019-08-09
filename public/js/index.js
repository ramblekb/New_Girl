var data = {
  // Get references to page elements
  description: $("#example-text"),
  month: $("#example-description"),
  date: $("#submit"),
  day: $("#example-list")

}
// The API object contains methods for each kind of request we'll make
var API = {
  addEvent: function (data, personsType) {

    if (personsType == "teacher") {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/teach",
        data: JSON.stringify(data),
        success: location.reload()
      });
    } else if (personsType == "student") {

      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/student",
        data: JSON.stringify(example),
        success: location.reload()
      });
    }
  },
  getInfo: function (personsType) {
    if (personsType == "student") {
      return $.ajax({
        url: "api/student",
        type: "GET"
      });
    }
    else if (personsType == "teacher") {
      return $.ajax({
        url: "api/teacher",
        type: "GET"
      });
    };
  },
  deleteEvent: function (id, personsType) {
    if (personsType == "student") {
      return $.ajax({
        url: "api/student",
        type: "DELETE"
      });
    }
    else if (personsType == "teacher") {
      return $.ajax({
        url: "api/teacher",
        type: "DELETE"
      });
    }
  }
};


// Add event listeners for buttons

$addNewEventBtn.on("click", function () {
  API.addEvent(data, personsType)
});

$getData.on("click", function () {
  API.getInfo(personsType)
});

$deleteEvent.on("click", ".delete", handleDeleteBtnClick);
