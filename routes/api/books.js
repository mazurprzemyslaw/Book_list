const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");

// route GET api/books
// @desc Get All books
// @access Public
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then(books => res.json(books));
});

// route POST api/books
// @desc Create book
// @access Public
router.post("/", (req, res) => {
  const newBook = new Book({
    author: req.body.author,
    title: req.body.title,
    isbn: req.body.isbn,
    pages: req.body.pages
  });

  newBook.save().then(book => res.json(book));
});

// route DELETE api/books/:id
// @desc Delete book
// @access Public
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
