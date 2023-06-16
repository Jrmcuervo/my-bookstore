import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import CategoriesPage from './components/CategoriesPage';

function App() {
  return (
    <Router>
      <div className="app">
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
                <BookList />
                <BookForm />
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
