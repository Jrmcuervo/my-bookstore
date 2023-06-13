import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };
    onAdd(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Share a book with us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title-input">
            Title:
            <input
              type="text"
              id="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="author-input">
            Author:
            <input
              type="text"
              id="author-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Share</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
