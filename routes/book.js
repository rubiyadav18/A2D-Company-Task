const express = require("express");
const router = express.Router();

const book = require("../controller/book");


// post book
router.post("/post/book",book.postBook);

//get book

router.get("/get/book",book.getBook)

//get Authers
router.get("/get/auther",book.getBookAuther)

//patch api for book
router.patch("/patch/auther/:id",book.patchBookAuther)

//Delete api --

router.delete("/delete/auther/:id",book.deleteBookAuther)


module.exports= router
