module.exports = function (sequelize, DataTypes) {
    var ClassEvent = sequelize.define("Class_Event", {
        UserId: {
            type: INTEGER,
            equals: "1"
        },
        DayId: {
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


    });
    //   var ClassEvent = sequelize.define("Class_Event", {
    //     UserID: DataTypes.INTEGER,
    //     DayID: DataTypes.INTEGER,
    //     StartTime: DataTypes.INTEGER,
    //     EndTime: DataTypes.INTEGER,
    //     EventName: DataTypes.STRING,
    //     Description: DataTypes.TEXT
    //   });
    return ClassEvent;
}
