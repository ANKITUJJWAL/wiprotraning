import express from 'express';
import userRoutes from './routes/users.js';




// Create an instance of Express
const app = express();




//Middleware
app.use(express.static('public')); 


/*
Every route should begin with /api/users
We are providing base url for all the routes which is  /api/users
    http://localhost:3000/api/users/
    http://localhost:3000/api/users/101
*/
app.use('/api/users', userRoutes);






// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
