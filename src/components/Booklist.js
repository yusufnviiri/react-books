/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Bookitem from './Bookitem';

function Booklist(props) {
  return (
    <>

      <ul>
        {
props.bookItem.map((book) => (

  <Bookitem
    bookprop={book}
    key={book.id}
  />

))

 }
      </ul>

    </>
  );
}

export default Booklist;
