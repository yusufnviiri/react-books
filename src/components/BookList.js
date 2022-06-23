import PropTypes from 'prop-types';

import React from 'react';
import BookItem from './BookItem';

function Booklist(props) {
  const { bookItem } = props;

  return (
    <>

      <ul>
        {
bookItem.map((book) => (

  <BookItem
    bookprop={book}
    key={book.id}

  />

))

 }
      </ul>

    </>
  );
}
Booklist.propTypes = {
  bookItem: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,

};

export default Booklist;
