import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookInput from './BookInput';
import Category from './Category';

function BookContainer() {
  const books = useSelector((state) => state.books);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookInput />} />

        <Route path="/allbooks" element={<BookList bookItem={books} />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </div>
  );
}

export default BookContainer;
