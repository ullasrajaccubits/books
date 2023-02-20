const express = require("express");
const { bookRoutes } = require("../modules/book");
const router = express.Router();

router.use("/book", bookRoutes);
module.exports = router;
