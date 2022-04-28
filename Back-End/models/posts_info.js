const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Enter the isbn Number"],
    length: 10,
  },
  description: {
    type: String,
    required: [true, "Fill the author"],
  },
  posted_date: {
    type: Date,
    required: [true, "Fill the date"],
  },
});

const Book = mongoose.model("posts", BookSchema);
module.exports = Book;
