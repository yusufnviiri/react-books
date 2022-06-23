import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/books/books';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const { bookprop } = props;
  const {
    type, title, author, id,
  } = bookprop;

  return (
    <div>
      <li className="bookDetails">

        <p className="bookType">{type}</p>
        <h3 className="bookTitle">{title}</h3>
        <p className="bookAuthor">{author}</p>
        <button type="button" className="comments">Comments</button>
        <button
          type="button"
          name={id}
          className="remove"
          onClick={() => dispatch({ type: ACTIONS.REMOVE_BOOK, payload: { id } })}
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
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
