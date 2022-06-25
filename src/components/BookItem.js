import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function BookItem(props) {
  const dispatch = useDispatch();
  const { bookprop } = props;
  const {
    title, author, category, id,
  } = bookprop;

  const percent = Math.ceil((Math.random() * 100) + 1);
  const chapter = Math.floor((Math.random() * 12) + 1);

  return (
    <div>
      {console.log(bookprop)}
      <li className="bookItem">
        <div className="bookItemDetails">
          <p className="bookType">{category}</p>

          <h3 className="bookTitle">{title}</h3>
          <p className="bookAuthor">{author}</p>
          <div className="bookButtons">
            <div id="comments">
              <button type="button" className="comments">Comments</button>
            </div>
            <div id="remove">
              <button
                type="button"
                name={id}
                className="remove"
                onClick={() => dispatch(removeBook(id))}
              >
                Remove

              </button>
            </div>
            <div id="edit">

              <button type="button" className="edit">Edit</button>
            </div>
          </div>
        </div>
        <div className="circle">
          <CircularProgressbar className="circleValue" value={percent} />
          <div className="circleSpan">
            <span className="circleValue">
              {' '}
              {`${percent}%`}
              {' '}
            </span>
            <span className="circleCompleted"> completed</span>
          </div>
        </div>

        <div className="chapter">
          <p className="currentChapter"> CURRENT CHAPTER</p>
          <p className="chapterValue">
            {' '}
            Chapter
            {' '}
            {`${chapter}`}
          </p>
          <button type="button" className="progress">UPDATE PROGESS</button>

        </div>

      </li>

    </div>
  );
}
BookItem.propTypes = {
  bookprop: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
