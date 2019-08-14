module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
    var Calendar = sequelize.define("Calendar", {
      Day: DataTypes.INTEGER
    });
    return Calendar;
  };
>>>>>>> origin/master
