/* eslint-disable  */
// Category actions and reducers

export const ACTIONS = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  ADD_CATEGORY_SUCCESS: 'REMOVE_CATEGORY',
  ADD_CATEGORY_FAILURE: 'ADD_CATEGORY_FAILURE',
  CHECK_STATUS: 'CHECK_STATUS',

};
export const checkStatus = () => ({

  details: 'Under construction',
});
export const addCategory = () => ({
  type: ACTIONS.ADD_CATEGORY,
  
});
export const addCategorySuccess = (category) => ({
  type: ACTIONS.ADD_CATEGORY_SUCCESS,
  payload: {category},
});
export const addCategoryFailure = (error) => ({
  type: ACTIONS.ADD_CATEGORY_FAILURE,
  payload: {error}
});
const initailState = {
  items: [],
  error: null,
  loading: false,
};

export const removeCategory = (id) => ({
  type: 'REMOVE_CATEGORY',
  payload: id,
});
function categoriesReducer(state = initailState, action) {
  switch (action.type) {
    case checkStatus:
      return [...state, checkStatus()];
    case 'REMOVE_CATEGORY':
      return state.filter((category) => category.id !== action.payload);
    case ACTIONS.ADD_CATEGORY:
      return [...state, action.payload];
    case ACTIONS.ADD_CATEGORY_SUCCESS:
      return {...state,
        loading:false,
        items: action.payload.category};
    case ACTIONS.ADD_CATEGORY_FAILURE:
      return {...state,
        loading:false,
        items: [],
        error: action.payload.error};

    default:
      return state;

  }
}
export default categoriesReducer;
