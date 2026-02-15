class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // invoking Error class 1-arg constructor
    this.status = statusCode;
  }
}


export default AppError;


import AppError from './utils/app-error.js';




app.get('/badrequest', (req, res, next) => {
  next(new AppError('Invalid request data', 400));
});


//error-handling function
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
