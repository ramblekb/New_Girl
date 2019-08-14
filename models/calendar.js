module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
      Day: DataTypes.INTEGER
    });
    return Calendar;
  };