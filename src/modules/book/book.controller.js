const express = require("express");
const bookService = require("./book.service");
const router = express.Router();

exports.bookDetails = async (req, res, next) => {
  try {
    const response = await bookService.bookDetails();
    console.log(response);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
exports.addBooks = async (req, res, next) => {
  try {
    const { body } = req;
    const response = await bookService.addBooks(body);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;

    const response = await bookService.getBooks(bookId);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
