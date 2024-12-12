const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class results extends Model {}

results.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students',
            key: 'id'
        }
    },
    exam_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'exams',
            key: 'id'
        }
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'results'
});

module.exports = results;
