/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Router, Route, browserHistory, IndexRoute,
} from 'react-router';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
