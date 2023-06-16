import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, handleDelete,
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <button type="button" onClick={handleDelete}>Remove</button>
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
