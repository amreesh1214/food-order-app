import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
