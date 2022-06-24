// Actions and reducers;

export const ACTIONS = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  EDIT_BOOK: 'EDIT_BOOK',
  POST_BOOK: 'POST_BOOK',
  GET_BOOKS: 'GET_BOOKS',
  DEL_BOOK: 'DEL_BOOK',
};

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qqmvN7udpzuJ6rXrrLS5/books';

export const getBooks = () => async (dispatch) => {
  const booksFromApi = await fetch(baseURL)
    .then((res) => res.json());
  const bookId = Object.keys(booksFromApi);
  const displaybooks = [];
  bookId.map((key) => displaybooks.push({
    id: key,
    title: booksFromApi[key][0].title,
    author: booksFromApi[key][0].author,
    category: booksFromApi[key][0].category,
  }));

  dispatch({ type: ACTIONS.GET_BOOKS, payload: displaybooks });
};
export const delBook = (payload) => ({
  type: ACTIONS.DEL_BOOK,
  payload,
});

export const addBooks = (book) => async (dispatch) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,

    }),
  });

  dispatch({ type: ACTIONS.ADD_BOOK, payload: book });
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch(delBook(id));
  window.location.reload();
};

export function booksReducer(state = [], action) {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      return [...state, action.payload];
    case ACTIONS.GET_BOOKS:
      return [...state, action.payload];
    case ACTIONS.DEL_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
}
export default booksReducer;
