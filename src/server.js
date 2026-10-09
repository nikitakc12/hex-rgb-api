const app = require('./app');

const PORT = 3000;

// Start the HTTP server for manual REST-client testing.
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});