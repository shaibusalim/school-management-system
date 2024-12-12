const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class events extends Model {}

events.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    target_audience: {
        type: DataTypes.ENUM('Admin', 'Teacher', 'Student', 'All'),
        allowNull: false
    }
    
}, {
    sequelize,
    timestamps: true,
    modelName: 'events'
});

//events.sync({ force: true });
// To create the table if it doesn't exist


module.exports = events;
