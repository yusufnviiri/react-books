import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import BookInput from './BookInput';
import Category from './Category';
import { getBooks } from '../redux/books/books';

function BookContainer() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  [BookInput]);

  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<BookInput />} />
        <Route path="/allbooks" element={<BookList bookItem={books[0]} />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </div>
  );
}

export default BookContainer;
