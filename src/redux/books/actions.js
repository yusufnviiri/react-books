/* eslint-disable  */
import { v4 as uuidv4 } from 'uuid';
const BaseURL='qqmvN7udpzuJ6rXrrLS5'

export const addBook = (title, author,category) => ({

  id: uuidv4(),  
  title,
  author,
  category,
});
export default addBook;
