const sequelize = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const database = new sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

database
.authenticate()
.then(() => {
    console.log('Database connection established');
})
.catch(err => {
    console.error('Erro message:', err);
});

module.exports = database;