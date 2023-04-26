function findAuthorById(authors, id) {
  return authors.filter((author) => author.id === id)[0];
}

function findBookById(books, id) {
  return books.filter((book) => book.id === id)[0];
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.reduce((account, book) => {
    if (book.borrows.some(borrow => !borrow.returned)) {
      account.push(book);
    }
    return account;
  }, []);
  const returnedBooks = books.reduce((account, book) => {
    if (book.borrows.every(borrow => borrow.returned)) {
      account.push(book);
    }
    return account;
  }, []);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowRecords = book.borrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return {...borrow, ...account};
      });
      return borrowRecords.slice(0,10);
    }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
