const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({

  book_Name: { type: String},
  book_Prize: { type: String },
  Author_name: { type: String},
  Created_by: { type: String },

});


module.exports = mongoose.model("book", booksSchema);


