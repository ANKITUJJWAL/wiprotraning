// 404 + central error handler
function notFound(req, res, next) {
  res.status(404).json({ error: 'Page Not found' });
}


//Centralized Error-handler
function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
}


export { notFound, errorHandler };
