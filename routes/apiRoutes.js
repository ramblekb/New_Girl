var db = require("../models");
module.exports = function (app) {
  // Find all Records and return them to the user with res.json
  app.get("/api/records", function (req, res) {
    db.Record.findAll({
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  // Find all Records by Artist and return them to the user with res.json
  app.get("/api/records/:artist", function (req, res) {
    db.Record.findAll({
      where: {
        Artist: req.params.artist
      }
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  // Find all Records by Album and return them to the user with res.json
  app.get("/api/records/:album", function (req, res) {
    db.Record.findAll({
      where: {
        Album: req.params.album
      }
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  // Find all Records All Users are willing to trade and return them to the user with res.json
  app.get("/api/records/:willingToTrade", function (req, res) {
    db.Record.findAll({
      where: {
        WillingToTrade: req.params.willingToTrade
      }
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  // Post Record to Record collection
  app.post("/api/addRecord", function (req, res) {
    console.log(req.body)
    db.Record.create(req.body).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
  //Delete Album
  app.delete("/api/records/:id", function (req, res) {
    db.Record.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecord) {
      res.json(dbRecord);
    });
  });
};
