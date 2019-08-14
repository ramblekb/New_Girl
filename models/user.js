module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        Student: DataTypes.BOOLEAN,
        Username: DataTypes.STRING,
        Password: DataTypes.STRING
    });
    return User;
}