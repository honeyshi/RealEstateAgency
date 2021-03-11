import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ForgetPassword, Login, ResetPassword, Signup, SuccessfulSignup } from './pages';
import { ContactUs } from './infoPages/contactUs';
import { StartPage } from './navbarPages/startPage';
import { CreateAdvertismentPage } from './navbarPages/createAdvertismentPage';
import { AdvertismentListPage } from './navbarPages/advertismentsListPage';

import './pagesStyle.scss';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/successful-signup" component={SuccessfulSignup} />

      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/new-advertisment" component={CreateAdvertismentPage} />
      <Route exact path="/flats" component={AdvertismentListPage} />
      <Route exact path="/" component={StartPage} />
    </Switch>
  );
};
