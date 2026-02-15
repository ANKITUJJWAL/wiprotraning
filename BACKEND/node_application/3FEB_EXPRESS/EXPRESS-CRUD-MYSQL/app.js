
// // import express from 'express';
// // import booksRouter from './routes/books.js';
// // import cors from "cors";

// // import { notFound, errorHandler } from "./middleware/errors.js";


// // const app = express();


// // // Built-in Middleware
// // app.use(express.json());


// // /*
// // express.urlencoded() parses HTML form data and makes it available as req.body.
// // It parses application/x-www-form-urlencoded data (classic HTML form data).


// // app.use(express.urlencoded({ extended: true })) enables Express to parse URL-encoded form data and supports nested objects when extended is true.




// // */
// // app.use(express.urlencoded({ extended: true }));


// // //allows requests from any origin. 
// // // In production, you should configure it to allow only trusted origins for security reasons.
// //  app.use(cors());

 

// // // Allow requests from specific origin (e.g., frontend running on port 5500)
// // app.use(
// //   cors({
// //     origin: ["http://127.0.0.1:5500", "http://localhost:5500"]
// //   })
// // );

// // // Mount routes, base URL
// // app.use('/api/v1/books', booksRouter);


// // // 404 + error handler (must be last)
// // app.use(notFound);
// // app.use(errorHandler);


// // const PORT = 3000;
// // app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));



// import express from "express";
// import dotenv from "dotenv";
// import { notFound, errorHandler } from "./middleware/errors.js";
// import booksRouter from "./routes/books.js";
// import cors from "cors";


// dotenv.config();


// const app = express();

// //allows requests from any origin. 
// // In production, you should configure it to allow only trusted origins for security reasons.
// app.use(cors());

// // Allow requests from specific origin (e.g., frontend running on port 5500)
// // app.use(
// //   cors({
// //     origin: "http://127.0.0.1:5500"
// //   })
// // );



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //base URL
// app.use('/api/v1/books', booksRouter);


// app.use(notFound);
// app.use(errorHandler);


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`MySQL API on http://localhost:${PORT}`));


import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errors.js";
import booksRouter from "./routes/books.js";
import usersRouter from "./routes/users.js";
import cors from "cors";


dotenv.config();


const app = express();
//allows requests from any origin. 
// In production, you should configure it to allow only trusted origins for security reasons.
app.use(cors());

// Allow requests from specific origin (e.g., frontend running on port 5500)
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500"
//   })
// );



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//base URL
app.use('/api/v1/books', booksRouter);
app.use("/api/v1/users", usersRouter);


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MySQL API on http://localhost:${PORT}`));

