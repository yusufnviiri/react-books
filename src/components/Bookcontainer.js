import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Booklist from './Booklist';
import Bookinput from './Bookinput';
import Category from './Category';

function Bookcontainer() {
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
        <Route path="/" element={<Bookinput />} />

        <Route path="/allbooks" element={<Booklist bookItem={book} />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </div>
  );
}

export default Bookcontainer;
