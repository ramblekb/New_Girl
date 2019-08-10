module.exports = function(sequelize, DataTypes) {
    var ClassEvents = sequelize.define("ClassEvents", {
        userId: {
            type: INTEGER,
            equals: "1"
        },
        dayId: {
            type: INTEGER,
            references: {
                model: Calendar,
                key: "day_id"
            },
            allowNull: false
        },
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
        eventName: {
            type: STRING,
            allowNull: false
        },
        eventDescription: {
            type: STRING,
            allowNull: false
        },
        freezeTableName: true,
    });
    return ClassEvents;
};
