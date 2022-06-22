/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/books/books';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const {
    type, title, author, id,
  } = props.bookprop;

  return (
    <div>
      {console.log(props.addCategory)}
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
