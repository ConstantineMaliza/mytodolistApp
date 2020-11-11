import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import ToDoList from './components/ToDoList'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToDoList/>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
