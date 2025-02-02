const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Improved error handling within the request handler
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;

// Improved error handling for server startup
const startServer = () => {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
    } else {
      console.error('Error starting server:', err);
    }
    process.exit(1); // Exit with an error code
  });
};

// Handle uncaught exceptions gracefully
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1); // Exit with an error code
});

startServer();