const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'updates',  
  username: 'nickcaravias',        
  password: '',    
  logging: false                 
});

module.exports = sequelize;