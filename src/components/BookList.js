import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => {
  const handleDelete = (bookId) => {
    onDelete(bookId);
  };

  return (
    <div>
      <h2>My collection</h2>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
