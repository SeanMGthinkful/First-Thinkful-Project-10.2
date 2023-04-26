function findAccountById(accounts, id) {
  return accounts.filter((account) => account.id === id)[0];
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((namesA, namesB) => (namesA.name.last > namesB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  const borrowRecords = books.filter(book => book.borrows.some(borrow => borrow.id === account.id));
  return borrowRecords.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowRecords = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned));
  const result = borrowRecords.map(record => {
    const book = record;
    book.author = authors.find(author => author.id === book.authorId);
    return book;
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
