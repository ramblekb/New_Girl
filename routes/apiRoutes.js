var db = require("../models");
var moment = require('moment');

module.exports = function(app) {
  // Post Record to Record collection
  app.post("/api/addRecord", function(req, res) {
    console.log(req.body)
    db.Records.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  //Delete Album
  app.delete("/api/records/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};