/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function BookItem(props) {
  const { title, author, type } = props.bookprop;
  return (
    <div>
      <li className="bookDetails">
        <p className="bookType">{type}</p>
        <h3 className="bookTitle">{title}</h3>
        <p className="bookAuthor">{author}</p>
        <button type="button" className="comments">Comments</button>
        <button type="button" className="remove">Remove</button>
        <button type="button" className="edit">Edit</button>

      </li>

    </div>
  );
}
