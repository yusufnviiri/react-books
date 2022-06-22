// Actions and reducers;

import { addBook } from './actions';

export const ACTIONS = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  EDIT_BOOK: 'EDIT_BOOK',
};

const initial = () => {
  const temp = localStorage.getItem('book');
  const saved = JSON.parse(temp);
  return saved || [];
};
export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});
export function booksReducer(state = initial(), action) {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      return [...state, addBook(action.payload.type, action.payload.title, action.payload.author)];
    case ACTIONS.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
export default booksReducer;
