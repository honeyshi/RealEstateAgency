import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DefaultPage } from 'shared/layout/defaultPage';
import { Login } from './pages/login';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={DefaultPage} />
    </Switch>
  );
};
