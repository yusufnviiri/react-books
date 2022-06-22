/* eslint-disable import/no-named-as-default */
// redux store configuration
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});
const store = configureStore({
  reducer: rootReducer,

});
export const useStore = () => store;
export const useDispatch = () => store.dispatch;
export const useSelector = () => store.select;
export default store;
