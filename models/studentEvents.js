module.exports = function (sequelize, DataTypes) {
    var Student_events = sequelize.define("Student_events", {
        day_id: {
            type: INTEGER,
            references: {
                model: Calendar,
                key: "day_id"
            },
            allowNull: false
        },
        start_time: DataTypes.STRING,
        end_time: DataTypes.STRING,
        event_name: {
            type: STRING,
            allowNull: false
        },
        event_description: {
            type: STRING,
            allowNull: false
        },
        freezeTableName: true,
    });
    return Student_events;
};
