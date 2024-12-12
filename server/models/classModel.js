const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class classes extends Model {}

classes.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'classes'
});

module.exports = classes;
