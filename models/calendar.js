module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    day_id: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 31
    },
    freezeTableName: true
  });
  return Calendar;
};
