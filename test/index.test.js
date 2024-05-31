require ( './helpers.js' );

const { expect } = require('chai');

// Your tests here
// Example function to be tested
function getBooksByGenre(genre, books) {
  return books.filter(book => book.genre === genre);
}

// Sample book data
const books = [
  { title: 'Book One', author: 'Author One', genre: 'Fiction' },
  { title: 'Book Two', author: 'Author Two', genre: 'Non-Fiction' },
  { title: 'Book Three', author: 'Author One', genre: 'Fiction' },
  { title: 'Book Four', author: 'Author Three', genre: 'Science' },
];

describe('getBooksByGenre', function() {
  it('should return an array of books matching the specified genre', function() {
    const genre = 'Fiction';
    const result = getBooksByGenre(genre, books);
    expect(result).to.be.an('array').that.has.lengthOf(2);
    expect(result).to.deep.include({ title: 'Book One', author: 'Author One', genre: 'Fiction' });
    expect(result).to.deep.include({ title: 'Book Three', author: 'Author One', genre: 'Fiction' });
  });

  it('should return an empty array if no books match the specified genre', function() {
    const genre = 'Fantasy';
    const result = getBooksByGenre(genre, books);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return an empty array if the books array is empty', function() {
    const genre = 'Fiction';
    const result = getBooksByGenre(genre, []);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return an empty array if the genre is an empty string', function() {
    const genre = '';
    const result = getBooksByGenre(genre, books);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should be case-sensitive when matching genres', function() {
    const genre = 'fiction'; // Note the lowercase 'f'
    const result = getBooksByGenre(genre, books);
    expect(result).to.be.an('array').that.is.empty;
  });
});
