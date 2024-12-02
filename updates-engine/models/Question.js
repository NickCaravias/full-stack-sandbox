const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

// Define the Question model
const Question = sequelize.define('Question', {
  // id field is automatically created by Sequelize as it is the primary key
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'questions',  
  timestamps: false,       
});

module.exports = Question;
