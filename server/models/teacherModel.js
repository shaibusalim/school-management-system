const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

class teachers extends Model {}

teachers.init({

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  highestDegree: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  gender: {
    type: DataTypes.ENUM('Male', 'Female'),
    allowNull: false,
   
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

}, {
    sequelize,
    timestamps: true,
    modelName: 'teachers'
});

teachers.belongsTo(User, { foreignKey: 'userId' })
module.exports = teachers;
