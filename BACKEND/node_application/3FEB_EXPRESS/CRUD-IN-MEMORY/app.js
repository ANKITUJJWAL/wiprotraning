
import express from 'express';
import booksRouter from './routes/book.js';


import { notFound, errorHandler } from "./middleware/error.js";


const app = express();


// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Mount routes, base URL
app.use('/api/v1/books', booksRouter);


// 404 + error handler (must be last)
app.use(notFound);
app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
