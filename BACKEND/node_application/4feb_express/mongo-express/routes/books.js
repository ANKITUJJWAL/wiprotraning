const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


// GET /api/books?author=Smith&limit=10&offset=0
router.get('/', async (req, res, next) => {
  try {
   /*
req.query contains the query string, the string after ? in the url.
Ex.
	GET /api/books?author=Smith&limit=10&offset=0
	What does req.query contains:
		author=Smith&limit=10&offset=0 
in form of JS object.
	{
        author: “Smith”,
	limit: 10,
 	offset: 0
	}


So
	const { author, limit = 50, offset = 0 } = req.query;
	Is same as
const author =req.query.author;
const limit =req.query.limit;
const offset =req.query.offset;




*/
    const { author, limit = 50, offset = 0 } = req.query;
    const lim = Number(limit);
    const off = Number(offset);


    const q = {};  //Empty JS object
    if (author) q.author = new RegExp(author, 'i');


   // const items = await Book.find({author: ${author}})
    const items = await Book.find(q)
      .sort({ _id: 1 })
      .skip(off)
      .limit(lim)
      .lean();


    res.json(items);
  } catch (e) { next(e); }
});


// GET /api/books/:id


/*
 Difference between req.query and req.params ?
req.query  contains a query string, i.e the string after ? in the url
Ex.
	 GET /api/books?author=Smith&limit=10&offset=0
	req.query contains 
	req.query = {
  author: 'martin',
  limit: '10',
  offset: '20’
};


req.params contains route parameters
Ex. GET /api/books/:author/:year
	:author and :year are the route parameters


Ex.
 From the browser, 
	GET /api/books/101


req.params.id contains 101
*/
router.get('/:id', async (req, res, next) => {
  try {
   //const doc = await Book.findOne({ id }).lean()
    const doc = await Book.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: 'Book not found' });
    res.json(doc);
  } catch (e) { next(e); }
});


// POST /api/books
router.post('/', async (req, res, next) => {
  try {
    const doc = await Book.create(req.body);
    res.status(201).json(doc);
  } catch (e) { next(e); }
});


// PUT /api/books/:id
router.put('/:id', async (req, res, next) => {
  try {
    const doc = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, overwrite: true }
    );
    if (!doc) return res.status(404).json({ error: 'Book not found' });
    res.json(doc);
  } catch (e) { next(e); }
});


// PATCH /api/books/:id
router.patch('/:id', async (req, res, next) => {
  try {
    const doc = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!doc) return res.status(404).json({ error: 'Book not found' });
    res.json(doc);
  } catch (e) { next(e); }
});


// DELETE /api/books/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Book not found' });
    res.status(204).send(result);
  } catch (e) { next(e); }
});


module.exports = router;
