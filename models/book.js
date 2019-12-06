const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  publishDate: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("book", BookSchema);
