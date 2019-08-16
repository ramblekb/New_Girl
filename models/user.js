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
    },
    Email: {
      type: DataTypes.STRING,
      isEmail: true
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Record, {
      onDelete: "cascade"
    });
  };
  
  return User;
};
