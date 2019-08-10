module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false
        },
        studentRole: {
            type: Boolean,
            allowNull: false
        }
    });
    return Users;
};
