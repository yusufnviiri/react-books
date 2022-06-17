import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import BookList from './BookList';
import BookInput from './BookInput';
import Category from './Category';

function BookContainer() {
  const book = [{
    id: 1,
    type: 'Action',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: 2,
    type: 'Economy',
    title: 'Pan African',
    author: 'Nelson Mandela',
  }];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookInput />} />

        <Route path="/allbooks" element={<BookList BookItem={book} />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </div>
  );
}

export default BookContainer;
