const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({path: './'})

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: 'Dertkj+3',
    port: 5432,
    database: 'example',
});
//console.log('Database conected');

modules.exports = { sequelize };

