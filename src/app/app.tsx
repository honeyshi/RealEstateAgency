import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DefaultPage } from 'shared/layout/defaultPage';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { ResetPassword } from './pages/resetPassword';
import { ForgetPassword } from './pages/forgetPassword';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/" component={DefaultPage} />
    </Switch>
  );
};
