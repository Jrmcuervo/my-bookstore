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
        <head>
          <meta property="og:title" content="My bookstore" />
          <meta name="og:description" content="This is my bookstore" />
          <meta property="og:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Feapenzacharias%2Fbookstore&psig=AOvVaw242NLyHMVNfoP3v4AqM7sT&ust=1687549633530000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPigz7bS1_8CFQAAAAAdAAAAABAE" />
          <meta property="og:url" content="https://github.com/Jrmcuervo/my-bookstore" />
        </head>
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
