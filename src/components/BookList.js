import PropTypes from 'prop-types';

import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import BookInput from './BookInput';

import { getBooks } from '../redux/books/books';

function Booklist(props) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  [dispatch]);
  const { bookItem } = props;

  return (
    <>
      {console.log(books)}
      <ul>

        {bookItem ? bookItem.map((book) => (
          <BookItem
            bookprop={book}
            key={book.id}
          />

        )) : 'Please wait...'}

      </ul>
      <BookInput />
    </>
  );
}
Booklist.propTypes = {
  bookItem: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,

    id: PropTypes.string.isRequired,
  })).isRequired,

};

export default Booklist;
