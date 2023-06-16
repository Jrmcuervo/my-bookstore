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
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-conteiner">
        <nav>
          <ul className="header-main">
            <li>
              <h1 className="header-title">BookStore CMS</h1>
            </li>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
            <li className="header-icon">
              <img src="user.png" alt="user icon" />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
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
