const db = require("../../database/models");
const { sequelize } = require("../../database/models");
exports.addBooks = async (book) => {
  const result = await db.Book.create(book);
  return result;
};

exports.bookDetails = async () => {
  const result = await db.Book.findAll();

  return result;
};

exports.getBooks = async (bookId) => {
  const check = await db.Book.findOne({ where: { id: bookId } });

  if (check.quantity <= 0) {
    return "book not available";
  }
  const t = await sequelize.transaction();
  try {
    let book = await db.Book.findOne({
      where: { id: bookId },
      transaction: t,
    });
    await book.decrement("quantity", {
      by: 1,
      transaction: t,
    });
    await t.commit();
    return "sucess";
  } catch (err) {
    console.log(err);

    await t.rollback();
  }
};
