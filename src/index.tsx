import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Navbar } from 'app/navbar';
import { history } from 'core/history';

import './style.scss';

const root = (
  <Router history={history}>
    <Navbar />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
