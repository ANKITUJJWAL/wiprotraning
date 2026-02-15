import AppError from './utils/app-error.js';
const express = require('express');
const app = express();


// Example route that works fine
app.get('/', (req, res) => {
  res.send('Home Page OK');
});


// Example route that triggers an error
app.get('/crash', (req, res, next) => {
  // Create an error object
  const err = new Error('Something went wrong in /crash route');
  // Pass it to next()
  next(err);
});


// Example route with try/catch
app.get('/divide', (req, res, next) => {
  try {
    const result = 10 / 0;
    if (!isFinite(result)) throw new Error('Division failed!');
    res.send('Division OK');
  } catch (err) {
	//res.status(500).send('Cannot divide by 0!');
    // Pass the caught error to the error handler
    next(err);
  }
});


// Custom error-handling middleware (must have 4 args)
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack); //display in Server console
  res.status(500).send(`Custom Error Handler says: ${err.message}`);
});


// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
