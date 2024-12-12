const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Notification extends Model{};
Notification.init({
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  targetRole: {
    type: DataTypes.ENUM('student', 'teacher'),
    allowNull: false,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true, 
  sequelize,
});

module.exports = Notification;
