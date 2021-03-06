import {
  AboutUs,
  AccessDeniedPage,
  ContactUs,
  EmailConfirm,
  Feedback,
  ForgetPassword,
  Login,
  NotFoundPage,
  Questions,
  ResetPassword,
  Signup,
  SuccessfulSendLink,
  SuccessfulSignup,
} from 'app/formPages';
import {
  AdminAdvertismentsListPage,
  AdminClaimListPage,
  CreateCoRequestPage,
  CreateSubscriptionPage,
  EditAdvertismentPage,
  FavouriteAdvertismentsListPage,
  MyPricingPage,
  OwnAdvertismentsListPage,
  OwnCoRequestPage,
  ProfileInformationPage,
  SubscriptionListPage,
  UserListPage,
  UserProfilePage,
} from 'app/userProfile';
import {
  AdvertismentDescriptionPage,
  AdvertismentListPage,
  CotenantDescriptionPage,
  CotenantsListPage,
  CreateAdvertismentPage,
  FlatsMapPage,
  PricingPage,
  StartPage,
  SuccessfulCreationPage,
} from 'app/navbarPages';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ErrorPage } from 'shared/layout/errorPage';
import React from 'react';
import { UnauthorizedErrorPage } from 'shared/layout/unauthorizedErrorPage';
import { UserRoles } from 'data/values';

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
      <Route exact path="/email-confirm" component={EmailConfirm} />
      <Route exact path="/access-denied" component={AccessDeniedPage} />

      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/faq" component={Questions} />
      <Route exact path="/feedback" component={Feedback} />

      {token == null && <Redirect from="/new-advertisment" to="/unauthorized" />}
      <Route exact path="/new-advertisment" component={CreateAdvertismentPage} />
      <Route exact path="/flats" component={AdvertismentListPage} />
      <Route exact path="/successful-advertisment-publishing" component={SuccessfulCreationPage} />
      <Route exact path="/pricing" component={PricingPage} />
      <Route exact path="/advertisment-description/:id" component={AdvertismentDescriptionPage} />
      <Route exact path="/search-roommates" component={CotenantsListPage} />
      <Route exact path="/cotenant-description/:id" component={CotenantDescriptionPage} />
      <Route exact path="/flats-map" component={FlatsMapPage} />

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
      <Route exact path="/profile/my-pricing" render={() => <UserProfilePage activeSubPage={<MyPricingPage />} />} />
      <Route
        exact
        path="/profile/subscription"
        render={() => <UserProfilePage activeSubPage={<SubscriptionListPage />} />}
      />
      <Route
        exact
        path="/profile/create-subscription"
        render={() => <UserProfilePage activeSubPage={<CreateSubscriptionPage />} />}
      />
      <Route
        exact
        path="/profile/edit-subscription/:id"
        render={() => <UserProfilePage activeSubPage={<CreateSubscriptionPage />} />}
      />
      <Route
        exact
        path="/profile/admin/advertisments"
        render={() => <UserProfilePage activeSubPage={<AdminAdvertismentsListPage />} />}>
        {currentUserRole === UserRoles.User && <Redirect to="/profile/info" />}
      </Route>
      <Route
        exact
        path="/profile/admin/claims"
        render={() => <UserProfilePage activeSubPage={<AdminClaimListPage />} />}>
        {currentUserRole === UserRoles.User && <Redirect to="/profile/info" />}
      </Route>
      <Route exact path="/profile/admin/users" render={() => <UserProfilePage activeSubPage={<UserListPage />} />}>
        {currentUserRole === UserRoles.User && <Redirect to="/profile/info" />}
      </Route>
      <Route
        exact
        path="/profile/my-cotenant-request"
        render={() => <UserProfilePage activeSubPage={<OwnCoRequestPage />} />}
      />
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
