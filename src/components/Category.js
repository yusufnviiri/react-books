import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/categories/categories';

function Category() {
  const category = useSelector((state) => state.categories);
  console.log(category);
  const dispatch = useDispatch();

  return (
    <div className="CategoryContainer">
      <h1>

        {category.length > 0 ? category[0].details : 'No category'}
      </h1>
      <button type="button" className="category" onClick={() => dispatch({ type: ACTIONS.CHECK_STATUS })}>
        Check status
      </button>

    </div>
  );
}

export default Category;
