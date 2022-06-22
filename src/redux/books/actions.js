/* eslint-disable import/prefer-default-export */
import { v4 as uuidv4 } from 'uuid';

export const addBook = (type, title, author) => ({

  id: uuidv4(),
  type,
  title,
  author,
  compeleted: false,
});
