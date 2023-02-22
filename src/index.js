import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import booksData from './books.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App books={booksData} />
  </React.StrictMode>
);

