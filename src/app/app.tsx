import './pagesStyle.scss';
import './tooltip.scss';

import {
  AdminAdvertismentsListPage,
  CreateCoRequestPage,
  EditAdvertismentPage,
  FavouriteAdvertismentsListPage,
  OwnAdvertismentsListPage,
  ProfileInformationPage,
  UserProfilePage,
} from 'app/userProfile';
import {
  AdvertismentDescriptionPage,
  AdvertismentListPage,
  CreateAdvertismentPage,
  PricingPage,
  StartPage,
  SuccessfulCreationPage,
} from 'app/navbarPages';
import {
  ForgetPassword,
  Login,
  NotFoundPage,
  ResetPassword,
  Signup,
  SuccessfulSendLink,
  SuccessfulSignup,
} from 'app/formPages';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContactUs } from './infoPages/contactUs';
import { CotenantsListPage } from './navbarPages/cotenantsListPage';
import { ErrorPage } from 'shared/layout/errorPage';
import React from 'react';
import { UnauthorizedErrorPage } from 'shared/layout/unauthorizedErrorPage';

export const App: React.FC = () => {
  const currentUserRole = localStorage.getItem('userRole');
  const token = localStorage.getItem('authInfo');
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/successful-signup" component={SuccessfulSignup} />
      <Route exact path="/successful-send-link" component={SuccessfulSendLink} />
      <Route exact path="/error" component={ErrorPage} />
      <Route exact path="/unauthorized" component={UnauthorizedErrorPage} />

      <Route exact path="/contact" component={ContactUs} />
      {token == null && <Redirect from="/new-advertisment" to="/unauthorized" />}
      <Route exact path="/new-advertisment" component={CreateAdvertismentPage} />
      <Route exact path="/flats" component={AdvertismentListPage} />
      <Route exact path="/successful-advertisment-publishing" component={SuccessfulCreationPage} />
      <Route exact path="/pricing" component={PricingPage} />
      <Route exact path="/advertisment-description/:id" component={AdvertismentDescriptionPage} />
      <Route exact path="/search-roommates" component={CotenantsListPage} />

      {token == null && <Redirect from="/profile*" to="/unauthorized" />}
      <Route exact path="/profile">
        <Redirect to="/profile/info" />
      </Route>
      <Route exact path="/profile/info" render={() => <UserProfilePage activeSubPage={<ProfileInformationPage />} />} />
      <Route
        exact
        path="/profile/my-advertisments"
        render={() => <UserProfilePage activeSubPage={<OwnAdvertismentsListPage />} />}
      />
      <Route
        exact
        path="/profile/favourite-advertisments"
        render={() => <UserProfilePage activeSubPage={<FavouriteAdvertismentsListPage />} />}
      />
      <Route
        exact
        path="/profile/admin/advertisments"
        render={() => <UserProfilePage activeSubPage={<AdminAdvertismentsListPage />} />}>
        {currentUserRole === '2' && <Redirect to="/profile/info" />}
      </Route>
      <Route
        exact
        path="/profile/create-cotenant-request"
        render={() => <UserProfilePage activeSubPage={<CreateCoRequestPage />} />}
      />
      <Route
        exact
        path="/profile/advertisment/:id/edit"
        render={() => <UserProfilePage activeSubPage={<EditAdvertismentPage />} />}
      />

      <Route exact path="/" component={StartPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
