import { v4 as uuidv4 } from 'uuid';

export const addBook = (type, title, author) => ({

  id: uuidv4(),
  type,
  title,
  author,
  compeleted: false,
});
export default addBook;
