module.exports = function(sequelize, DataTypes){
    var Student = sequelize.define("Student", {
        UserID: DataTypes.INTEGER,
        DayID: DataTypes.INTEGER,
        StartTime: DataTypes.INTEGER,
        EndTime: DataTypes.INTEGER,
        EventName: DataTypes.INTEGER,
        Description: DataTypes.TEXT
    });
    return Student;
}
