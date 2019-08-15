module.exports = function(sequelize, DataTypes) {
    var ClassEvent = sequelize.define("Class_Event", {
        UserID: DataTypes.INTEGER,
        Time: DataTypes.DATE,
        Duration: DataTypes.INTEGER,
        EventName: DataTypes.STRING,
        Description: DataTypes.TEXT
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
};

  // var checkTime = moment();

  // event.Date = "2:00 pm"
  // event.Duration = 90

  // checkTime = "3:00 pm"

  // if(checkTime.isAfter(moment(event.Date)) && checkTime.isBefore(moment(event.Date).add(event.Durations, 'm'))){
  //     console.log("checktime occures during perviously scheduled event")
  // }