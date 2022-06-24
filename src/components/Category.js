/* eslint-disable  */
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/categories/categories';
import {addCategory} from '../redux/categories/categories';
import axios from 'axios';

function Category() {
  const category = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  

  const getCustomersData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/customers")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
 





  return (
    <div className="CategoryContainer">
      {  getCustomersData()}
     
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
