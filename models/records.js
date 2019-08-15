module.exports = function(sequelize, DataTypes) {
  var Record = sequelize.define("Record", {
    Artist: {
      type: DataTypes.STRING,
      allownull: false
    },
    Album: {
      type: DataTypes.STRING,
      allownull: false
    },
    Year: DataTypes.STRING,
    WillingToTrade: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      references: {
      model: User,
      key: "id"
      },
      allownull: false
    }
  });
<<<<<<< HEAD

=======
  
>>>>>>> 664f5c7d0432c1e0f8c0dd6a9449796e4e5cd35b
  Record.associate = function(models) {
    Record.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Records;
};
