const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

class students extends Model {}

students.init({
   
      studentId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fees: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    
    
    
   
    
    
}, {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'students'
});
students.belongsTo(User, { foreignKey: 'userId' })

module.exports = students;
