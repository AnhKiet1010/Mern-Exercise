var express = require('express');

var router = express.Router();
const Book = require('../models/book.model');

router.get('/', async function(req, res) {
    const books = await Book.find();
    res.json(books);
  })
module.exports = router;