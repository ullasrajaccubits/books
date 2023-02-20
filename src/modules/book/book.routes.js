const express = require("express");
const bookController = require("./book.controller");

const router = express.Router();

router.get("/", bookController.bookDetails);
router.post("/addBooks", bookController.addBooks);
router.post("/getBooks/:bookId", bookController.getBooks);
module.exports = router;
