module.exports = function(sequelize, DataTypes) {
  var Records = sequelize.define("records", {
    Artist: {
      type: DataTypes.STRING,
      allownull: false
    },
    Album: {
      type: DataTypes.STRING,
      allownull: false
    },
    Year: DataTypes.STRING,
    WillingToTrade: DataTypes.BOOLEAN
  });
  return Records;
};
