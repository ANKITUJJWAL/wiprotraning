

import express from 'express';


// Create an instance of Express
const app = express();


//Middleware
app.use(express.static('public')); 




app.use(
(req, res, next) => {
 //In production, we log into files/tables
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to next middleware
});




// Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });




app.get('/', (req, res) => {
  res.send('Home Page');
});




app.get('/about', (req, res) => {
  res.send('About Page');
});




app.post('/contact', (req, res) => {
  res.send('Contact form submitted');
});




//Route Parameters
// http://localhost:3000/user/101
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});








// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
