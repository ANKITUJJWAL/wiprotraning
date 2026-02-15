const express = require('express');


//Creates an instance of an Express application.
const app = express();


// Built-in middleware for JSON
/*
To enable an Express.js application to handle and parse incoming JSON data in request bodies, the express.json() middleware is utilized. 


This is a built-in middleware in Express.js eliminating the need for external packages like body-parser for basic JSON parsing.




*/
app.use(express.json());


// Routes
app.get('/', (req, res) => res.send('Welcome Home'));
app.get('/about', (req, res) => res.send('About Page'));
app.post('/data', (req, res) => res.json({ received: req.body }));


// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
