module.exports = function (sequelize, DataTypes) {
    var Class_events = sequelize.define("Class_events", {
        user_id: {
            type: INTEGER,
            equals: "1"
        },
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
    return Class_events;
};
