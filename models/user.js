module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Username: {
            type: STRING,
            allownull: false,
            unique: true
        },
        Password: {
            type: STRING,
            allownull: false
        },
        Role: {
            type: STRING,
            allownull: false
        }
    });
    return User;
}