function getTotalBooksCount(books) {
  const result = books.reduce((total, book) => total + 1, 0);
  return result;
}

function getTotalAccountsCount(accounts) {
  const result = accounts.reduce((total, account) => total + 1, 0);
  return result;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.reduce((borrowed, book) => {
    if (book.borrows.some(borrow => !borrow.returned)) {
      borrowed.push(book);
    }
 return borrowed;
  }, []); 
  const result = borrowedBooks.length;
  return result;
};


function getMostCommonGenres(books) {
  const genres = books.reduce((count, book) => {
    count[book.genre] = (count[book.genre] || 0) + 1;
    return count;
  }, {});

  const result = Object.keys(genres).map((genre) => ({
    name: genre,
    count: genres[genre],
  }));

  result.sort((genreA, genreB) => genreB.count - genreA.count);

  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const titles = books.reduce((count, book) => {
    count[book.title] = (count[book.title] || 0) + book.borrows.length;
    return count;
  }, {});

  const result = Object.keys(titles).map((title) => ({
    name: title,
    count: parseInt(titles[title],10),
  }));

  result.sort((bookA, bookB) => bookB.count - bookA.count);

  return result.slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  const authorCounts = books.reduce((count, book) => {
    const author = authors.find(author => author.id === book.authorId);
    if (author) {
      const authorName = `${author.name.first} ${author.name.last}`;
      count[authorName] = (count[authorName] || 0) + book.borrows.length;
    }
    return count;
  }, {});

  const result = Object.keys(authorCounts).map(authorName => ({
    name: authorName,
    count: parseInt(authorCounts[authorName]),
  }));

  result.sort((authorA, authorB) => authorB.count - authorA.count);

  return result.slice(0, 5);
}








module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
