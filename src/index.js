import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

const getBooks = async () => {
  const { data } = await axios.get('books.json');
  return data;
}

const DATA = getBooks();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App books = {DATA}/>
  </React.StrictMode>
);