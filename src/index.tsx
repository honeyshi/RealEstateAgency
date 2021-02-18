import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'app/app';
import { history } from 'core/history';
import { store } from 'core/store';

import './style.scss';
import './typography.scss';

const root = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
