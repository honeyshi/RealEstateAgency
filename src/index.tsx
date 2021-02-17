import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from 'app/app';
import { history } from 'core/history';

import './style.scss';
import './typography.scss';

const root = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
