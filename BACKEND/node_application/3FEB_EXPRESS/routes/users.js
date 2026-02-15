
import express from 'express';


//instance of Router 
const router = express.Router();


//http://localhost:3000/
router.get('/', (req, res) => res.send('User List'));


//http://localhost:3000/101
router.get('/:id', 
(req, res) => res.send(`User ID: ${req.params.id}`)
);


router.get('/json', (req, res) => {
  res.status(200).json({ message: 'Success', code: 200 });
});




export default router;
