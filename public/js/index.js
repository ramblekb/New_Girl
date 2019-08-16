var data = {
  // Get references to page elements
  artist: $("#artist-name").val(),
  album: $("#album-name").val(),
  month: $("#month-id").val(),
  willToTrade: $("#wTT-id").val(),
  userName: $("#userName-id").val()

};
// The API object contains methods for each kind of request we'll make
var API = {


  //This will make a post call to the server which will take 3 params the data being sent to the the server , the usersType "teacher" or "student",
  //and the id of the user
  addRecord: function (data) {
    $.post("/api/addRecord", data, function (err, res) {
      if (err) throw err;
      console.log("sending data to api....");
    })

  },
  getAllrecords: function () {
    $.get("/api/records", function (err, res) {
      if (err) throw err;
      console.log("getting all records.......")
    });

  },
  searchArtist: function (artist) {
    $.get("api/arist/" + artist, function (err, res) {
      if (err) throw err;
      console.log("searching for " + artist + ".......")
    });
  },
  searchAlbum: function (album) {
    $.get("api/album/" + album, function (err, res) {
      if (err) throw err;
      console.log("searching for " + album + "........")
    });
  },

}
//This will get call to the server and takes one params the take the users type "teacher" or "student"




// Add event listeners for buttons
$(".addRecordBtn").click(function () {
  API.addRecord(data);
});
$(".getAllRecordsBtn").click(function () {
  API.getAllrecords();
});

$(".searchArtistBtn").click(function () {
  API.searchAlbum(album);
});
$(".addEventBtn").click(function () {
  API.searchArtist(artist);

});
