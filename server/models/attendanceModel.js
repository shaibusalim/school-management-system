const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Students = require('./studentModel');

class attendance extends Model {}

attendance.init({
  
      studentId: {
        type: DataTypes.STRING,
        references: {
          model: 'students',
          key: 'studentId'
        },
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Present', 'Absent'),
        allowNull: false
      }

}, {
    sequelize,
    timestamps: true,
    modelName: 'attendance'
});


    attendance.belongsTo(Students, {
      foreignKey: 'studentId',
      as: 'student'
    });
 

module.exports = attendance;
