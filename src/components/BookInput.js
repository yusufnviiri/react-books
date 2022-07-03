/* eslint-disable  */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { addBooks, getBooks } from '../redux/books/books';

function BookInput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('select');
  const book = {
    id: uuidv4(), title, author, category,
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooks(book));
    setTitle('');
    setAuthor('');
    setCategory(' ');
    setTimeout(() => {
      window.location.reload();
    }
    , 1000);
  
   
  };
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
    console.log(books);
  },
  [dispatch]);

  const options = [
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Economy', label: 'Economy' },
  ];

  return (

    <div>
      {console.log(books)}
      <form onSubmit={handleSubmit}>
        <h1>ADD NEW BOOK</h1>
        <div className="form">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book title"
            className="titleInput"
          />

          <input
            type="text"
            name="author"
            className="authorInput"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="add auther"
          />

          <Select
            options={options}
            className="selects"
            onChange={(e) => setCategory(e.value)}
            placeholder="category"
          />

          <div className="submitButton">
            <button type="submit">ADD BOOK</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default BookInput;
