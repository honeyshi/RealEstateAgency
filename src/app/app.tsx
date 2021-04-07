import './pagesStyle.scss';
import './tooltip.scss';

import { ForgetPassword, Login, ResetPassword, Signup, SuccessfulSignup } from './formPages';
import { Route, Switch } from 'react-router-dom';

import { AdvertismentListPage } from './navbarPages/advertismentsListPage';
import { ContactUs } from './infoPages/contactUs';
import { CreateAdvertismentPage } from './navbarPages/createAdvertismentPage';
import { PricingPage } from './navbarPages/pricingPage';
import React from 'react';
import { StartPage } from './navbarPages/startPage';
import { SuccessfulCreationPage } from './navbarPages/createAdvertismentPage';
import { SuccessfulSendLink } from './formPages/successfulSendLink';
import { UserProfilePage } from './userProfile';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/successful-signup" component={SuccessfulSignup} />
      <Route exact path="/successful-send-link" component={SuccessfulSendLink} />

      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/new-advertisment" component={CreateAdvertismentPage} />
      <Route exact path="/flats" component={AdvertismentListPage} />
      <Route exact path="/successful-advertisment-publishing" component={SuccessfulCreationPage} />
      <Route exact path="/pricing" component={PricingPage} />
      <Route exact path="/profile/*" component={UserProfilePage} />
      <Route exact path="/" component={StartPage} />
    </Switch>
  );
};
