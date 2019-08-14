module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        DayID: {
            type: INTEGER,
            references: {
                model: Calendar,
                key: "day_id"
            },
            allowNull: false
        },
        StartTime: DataTypes.STRING,
        EndTime: DataTypes.STRING,
        EventName: {
            type: STRING,
            allowNull: false
        },
        EventDescription: {
            type: STRING,
            allowNull: false
        },
        freezeTableName: true
    });
    return Student;
}
