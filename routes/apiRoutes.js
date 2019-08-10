var db = require("../models");
var moment = require('moment');

module.exports = function(app) {
  // Get Class Events for Teacher
  app.get("/api/classEvent", function(req, res) {
    db.classEvent.findAll({}).then(function(dbclassEvent) {
      res.json(dbclassEvent);
    });
  });

  app.get("/api/getdayevents", function(req, res){
    db.Class_Event.findAll({
      where: {
        Time: {
          $gte: moment(),
          $lte: moment().add(1, 'hour')
        }
      }
    })
      .then(function(dbData){
        res.json(dbData)
      })
  })

  // Post in Class Events for Teacher
  app.post("/api/classEvent", function(req, res) {
    console.log(req.body)
    db.Class_Event.create({
      ...req.body,
      Time: moment(req.body.Time, "MM-DD-YYYY HH:mm")
    }).then(function(dbclassEvent) {
      res.json(dbclassEvent);
    });
  });

  // Delete a Class Event for Teacher
  app.delete("/api/classEvent/:id", function(req, res) {
    db.classEvent.destroy({ where: { id: req.params.id } }).then(function(dbclassEvent) {
      res.json(dbclassEvent);
    });
  });
};