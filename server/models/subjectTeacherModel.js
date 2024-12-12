const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class subjects_teachers extends Model {}

subjects_teachers.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'subjects',
            key: 'id'
        }
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'subjects_teachers'
});

module.exports = subjects_teachers;
