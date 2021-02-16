import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { ResetPassword } from './pages/resetPassword';
import { ForgetPassword } from './pages/forgetPassword';
import { ContactUs } from './infoPages/contactUs';
import { StartPage } from './navbarPages/startPage';
import { CreateAdvertismentPage } from './navbarPages/createAdvertismentPage';

import './pagesStyle.scss';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/new-advertisment" component={CreateAdvertismentPage} />
      <Route exact path="/" component={StartPage} />
    </Switch>
  );
};
