import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import CategoriesPage from './components/CategoriesPage';

function App() {
  const [books, setBooks] = useState([]);

  const handleAdd = (newBook) => {
    const bookId = { ...newBook, id: Date.now() };
    setBooks([...books, bookId]);
  };

  const handleDelete = (bookId) => {
    const deletedBooks = books.filter((book) => book.id !== bookId);
    setBooks(deletedBooks);
  };

  return (
    <Router>
      <div className="main">
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <h1>Bookstore CMS</h1>
                <BookList books={books} onDelete={handleDelete} />
                <BookForm onAdd={handleAdd} />
              </div>
            )}
          />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
