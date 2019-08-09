var data = {
  // Get references to page elements
  description: $("#description-id").val(),
  month: $("#month-id").val(),
  date: $("#date-id").val(),
  day: $("#day-id").val()

}
// The API object contains methods for each kind of request we'll make
var API = {

  addEvent: function (data, personsType, id) {

    if (personsType == "teacher") {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/teach/" + id,
        data: JSON.stringify(data),
        // success: location.reload()
      });
    } else if (personsType == "student") {

      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/student/" + id,
        data: JSON.stringify(example),
        // success: location.reload()
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
        url: "api/teach",
        type: "GET"
      });
    };
  },
  deleteEvent: function (eventid, personsType) {
    if (personsType == "student") {
      return $.ajax({
        url: "api/student/" + eventId,
        type: "DELETE"
      });
    }
    else if (personsType == "teacher") {
      return $.ajax({
        url: "api/teach/" + eventId,
        type: "DELETE"
      });
    }
  },
  updateEvent: function (id, eventId, personsType) {
    if (personsType == "student") {
      return $.ajax({
        url: "api/teach/" + id + "/" + eventId,
        type: "PUT"
      })
    }
    else if (personsType == "teacher") {
      return $.ajax({
        url: "api/student/" + id + "/" + eventId,
      })
    }
  }
};




// Add event listeners for buttons
$(".deleteEventBtn").click(function(eventid, personsType){
    API.deleteEvent(eventId , id);
});
$(".updateEventBtn").click(function(){
  API.updateEvent(id, eventId, personsType);
});

$(".getEventsBtn").click(function(){
  API.getInfo(personsType);
});
$(".addEventBtn").click(function(){
  API.addEvent(data, personsType, id)
})
