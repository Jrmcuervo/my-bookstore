import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { addBook, removeBook } from './redux/books/booksSlice';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import CategoriesPage from './components/CategoriesPage';

function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAdd = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
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
