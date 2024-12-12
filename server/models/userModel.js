const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');



class users extends Model{};

users.init({
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Student', 'Teacher', 'Admin'),
    allowNull: false,
  },
  
},{
    sequelize,
    timestamps: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    modelName: 'users'
   
});

module.exports = users;