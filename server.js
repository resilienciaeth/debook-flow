const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;  // You can use any port you like

// Serve static assets (your React build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Serve the serviceWorker from the root
app.get('/serviceWorker.js', (req, res) => {
  // Set MIME type for JavaScript
  res.type('application/javascript');
  
  // Send the serviceWorker.js file
  res.sendFile(path.resolve(__dirname, 'src', 'serviceWorker.js'));
});

// Make sure all other routes go to the index.html 
// (so your React Router or similar client-side routing works)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
