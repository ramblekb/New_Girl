module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allownull: false
    }
  });
  return User;
};
