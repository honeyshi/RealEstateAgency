import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Footer, Navbar } from 'app';
import { history } from 'core/history';

import './style.scss';

const root = (
  <Router history={history}>
    <Navbar />
    <Footer />
  </Router>
);

ReactDOM.render(root, document.getElementById('root'));
