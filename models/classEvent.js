module.exports = function (sequelize, DataTypes) {
    var ClassEvent = sequelize.define("Class_Event", {
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        text: DataTypes.STRING


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