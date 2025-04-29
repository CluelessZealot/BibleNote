// Import express
const express = require('express');

// Create an express app
const app = express();

// Set the port
const port = process.env.PORT || 3000; // Use 3000 or an environment port

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define a basic route (optional)
app.get('/', (req, res) => {
  res.send('Hello, BibleNote!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});