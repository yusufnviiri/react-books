import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const { bookprop } = props;
  const {
    title, author, category, id,
  } = bookprop;

  return (
    <div>
      {console.log(bookprop)}
      <li className="bookDetails">
        <p className="bookType">{category}</p>

        <h3 className="bookTitle">{title}</h3>
        <p className="bookAuthor">{author}</p>
        <button type="button" className="comments">Comments</button>
        <button
          type="button"
          name={id}
          className="remove"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove book

        </button>
        <button type="button" className="edit">Edit</button>

      </li>

    </div>
  );
}
BookItem.propTypes = {
  bookprop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
