import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/books/books';

function BookInput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_BOOK, payload: { type, title, author } });
    setTitle('');
    setAuthor('');
    setType('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>ADD NEW BOOK</h1>
        <div className="form">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="add title"
          />
          <span>by</span>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="add auther"
          />
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="add type"
          />

          <button type="submit">ADD BOOK</button>

        </div>

      </form>

    </div>
  );
}

export default BookInput;
