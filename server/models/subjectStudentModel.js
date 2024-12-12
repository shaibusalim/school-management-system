const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class subjects_students extends Model {}

subjects_students.init({
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
    student_id: {
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
    modelName: 'subjects_students'
});

module.exports = subjects_students;
