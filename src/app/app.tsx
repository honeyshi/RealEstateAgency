import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DefaultPage } from 'shared/layout/defaultPage';
import { Login } from './pages/login';
import { ForgetPassword } from './pages/forgetPassword';
import { Signup } from './pages/signup';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={DefaultPage} />
    </Switch>
  );
};
