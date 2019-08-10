module.exports = function(sequelize, DataTypes) {
  var Calendar = sequelize.define("Calendar", {
    dayId: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 31
    },
    freezeTableName: true
  });
  return Calendar;
};
