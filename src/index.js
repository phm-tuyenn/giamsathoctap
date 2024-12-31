import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import reportWebVitals from './reportWebVitals';
import "holderjs"

import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home/>
);

reportWebVitals();
