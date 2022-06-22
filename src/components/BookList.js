/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import BookItem from './BookItem';

function Booklist(props) {
  return (
    <>

      <ul>
        {
props.BookItem.map((book) => (

  <BookItem
    bookprop={book}
    key={book.id}
    addCategory={props.category}
  />

))

 }
      </ul>

    </>
  );
}

export default Booklist;
