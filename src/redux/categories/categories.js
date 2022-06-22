// Category actions and reducers

export const ACTIONS = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  EDIT_CATEGORY: 'EDIT_CATEGORY',
  CHECK_STATUS: 'CHECK_STATUS',

};
export const checkStatus = () => ({

  details: 'Under construction',
});

export const removeCategory = (id) => ({
  type: 'REMOVE_CATEGORY',
  payload: id,
});
function categoriesReducer(state = [], action) {
  switch (action.type) {
    case 'CHECK_STATUS':
      return [...state, checkStatus()];
    case 'REMOVE_CATEGORY':
      return state.filter((category) => category.id !== action.payload);
    default:
      return state;
  }
}
export default categoriesReducer;
