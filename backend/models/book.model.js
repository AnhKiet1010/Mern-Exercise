var mongoose = require('mongoose');

var bookSchema  = new mongoose.Schema({
	name: String,
	image: String,
	price: String
});

var Book = mongoose.model('Book', bookSchema,'books');

module.exports = Book;