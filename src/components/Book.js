import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, handleDelete,
  } = props;

  return (
    <div className="book-main">
      <div className="book-details">
        <h3>{title}</h3>
        <p className="book-details-text">
          {' '}
          {author}
        </p>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <hr />
          <button type="button" onClick={handleDelete}>Remove</button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="book-progress" />
      </div>
      <div className="book-percentage">
        <p>8%</p>
        <p>Completed</p>
      </div>
      <hr className="book-hr" />
      <div className="book-chapter">
        <p>
          CURRENT CHAPTER
        </p>
        <p>
          Chapter 2
        </p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,

};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
