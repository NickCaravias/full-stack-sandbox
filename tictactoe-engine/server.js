// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;

// api routes imports
const boardRoutes = require("./routes/board")

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/board', boardRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Tic-Tac-Toe engine REST API listening at http://localhost:${port}`);
});
