/* eslint-disable  */
// redux store configuration
import { combineReducers } from 'redux';
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import { booksReducer } from './books/books';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [applyMiddleware(thunk)],
  middleware: [thunk],

});
export const useStore = () => store;
export const useDispatch = () => store.dispatch;
export const useSelector = () => store.select;
export default store;
