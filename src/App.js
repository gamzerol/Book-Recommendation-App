import React, { useState, useEffect, useCallback } from 'react';

import FormValidation from './Component/FormValidation'
import BookList from './Component/bookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('https://books-3c8b9-default-rtdb.firebaseio.com/books.json');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedBooks = [];

      for(const key in data) {
        loadedBooks.push({
          id: key,
          title: data[key].title,
          detail: data[key].detail
        });
      }
      setBooks(loadedBooks);
    } catch(error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  async function addBookHandler(book) {
    const response = await fetch('https://books-3c8b9-default-rtdb.firebaseio.com/books.json', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchBooksHandler();
  }


  return (
    <div className="App">
      <FormValidation onAddBook={addBookHandler} />
      {!error && <BookList books={books} />}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
