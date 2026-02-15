

const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('./db/connect');
const { notFound, errorHandler } = require('./middleware/errors');
const booksRouter = require('./routes/books');


dotenv.config();


const app = express();
app.use(express.json()); //Middleware,1
app.use(express.urlencoded({ extended: true })); //Middleware,2




connect().catch((e) => {
  console.error('Mongo connection failed', e);
  process.exit(1);
});


// routes
app.use('/api/books', booksRouter); //Middleware,3


// errors
app.use(notFound); //Middleware,4
app.use(errorHandler); //Middleware,5


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mongo API on http://localhost:${PORT}`));
