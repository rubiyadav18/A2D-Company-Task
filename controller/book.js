const books = require("../modle/books");

//post API for book

const postBook = async (req, res) => {
    let { book_Name, book_Prize, Author_name, Created_by} = req.body;
  
    try {
      if (!(book_Name && book_Prize &&  Author_name && Created_by)) {
        res.json({ message: "All books are required", status: false });
      } else {
        const book = await books.create({
          book_Name,
          book_Prize,
          Author_name,
          Created_by
         
        });
  
        if (!book) {
          res.json({ message: "books is not created", status: false });
        } else {
          res.json({
            message: "books is created successfully",
            data: book,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


//getAll books

const getBook = async (req, res) => {
    let page = (req.query.page*10)-10
    try {
      const book = await books.find().limit(10).skip(page);
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      }
      // res.json(admin)
      res.json({
        message: "user is found the Books details ",
        data: book,
        status: true,
      });
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };
  
//get api by Authore

const getBookAuther = async (req, res) => {
    let page = (req.query.page*10)-10
    let auther = req.query.auther
    try {
      const book = await books.find({Author_name:auther}).limit(10).skip(page);
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      }
      // res.json(admin)
      res.json({
        message: "user is found the Books details ",
        data: book,
        status: true,
      });
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


//patch api  for book

const patchBookAuther = async (req, res) => {
    let { book_Name, book_Prize, Author_name} = req.body;
    try {
      const book = await books.findOneAndUpdate({ id: req.params.id },{book_Name,book_Prize,Author_name});
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.json({
          message: "newschemes is edited successsfully",
          data: book,
          status: true,
        });
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };
  

//Delete api 

const deleteBookAuther = async (req, res) => {
    try {
      const book = await books.findOneAndDelete({ id: req.params.id });
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.send({ message: "Books is deleted successfully", status: true });
      }
    } catch (error) {
      res.send({ message: error.message, status: false });
    }
  };
  
  module.exports = {
    postBook,
    getBook,
    getBookAuther,
    patchBookAuther,
    deleteBookAuther

  }



