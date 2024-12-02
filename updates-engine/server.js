// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;

// routes imports 
const questionRoutes = require('./routes/questionsRoutes');

// database connetion imports
const sequelize = require('./config/database');  // Import the Sequelize instance
const Question = require('./models/Question');  // Import the Question model

// connect to SQL database 
sequelize.authenticate()  // Authenticate the connection to PostgreSQL
  .then(() => {
    console.log('Database connected successfully.');

    // Optionally, sync the database (ensure tables are created) -- uncomment if needed
    // sequelize.sync({ force: false })  // Set `force: true` to drop and recreate tables on every app restart
    //   .then(() => {
    //     console.log('Database synced successfully.');
        
    //   })
    //   .catch((err) => {
    //     console.error('Error syncing database:', err);
    //   });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// api routes imports
app.use('/api/questions', questionRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Updates engine REST API listening at http://localhost:${port}`);
});