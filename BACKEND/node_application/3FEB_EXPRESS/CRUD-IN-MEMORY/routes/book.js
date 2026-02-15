


//import express from 'express';
//const router = express.Router();


import { Router } from "express";
const router = Router();




let seq = 4;


let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
  { id: 2, title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: 2015 },
 { id: 3, title: 'Angular in 10 days', author: 'Ken Thompson', year: 2019 },
];


// Simple field validator
function validateBook(body) {
  const errors = []; //empty array
  if (!body.title || typeof body.title !== 'string') 
errors.push('title required');
  if (!body.author || typeof body.author !== 'string') 
errors.push('author required');
  if (body.year && typeof body.year !== 'number') 
errors.push('year must be number');
  return errors;
}


// GET /api/v1/books
router.get('/', (req, res) => {
  res.json(books);
});


// GET /api/v1/books/:id
router.get('/:id', (req, res) => {
 //the parameters are always stored as Strings in the req object
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});


// POST /api/v1/books
router.post('/', (req, res) => {
  const errors = validateBook(req.body);
  if (errors.length) return res.status(400).json({ errors });


  const book = { id: seq++, ...req.body };
  books.push(book);
  res.status(201).json(book);
});


// PUT /api/books/:id (full update)
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });


  const errors = validateBook(req.body);
  if (errors.length) return res.status(400).json({ errors });


  books[idx] = { id, ...req.body };
  res.json(books[idx]);
});


// PATCH /api/books/:id (partial)
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });


  const { title, author, year } = req.body;


 if (title !== undefined && typeof title !== 'string')
    return res.status(400).json({ error: 'title must be string' });


 if (author !== undefined && typeof author !== 'string')
    return res.status(400).json({ error: 'author must be string' });


if (year !== undefined && typeof year !== 'number')
    return res.status(400).json({ error: 'year must be number' });


if (title !== undefined) book.title = title;


if (author !== undefined) book.author = author;


if (year !== undefined) book.year = year;


res.json(book);
});




// DELETE /api/books/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = books.length;
  books = books.filter(b => b.id !== id);
  if (books.length === before) return res.status(404).json({ error: 'Book not found' });
  res.status(204).send(); // no content
});


export default router;


