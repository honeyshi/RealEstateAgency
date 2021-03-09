import axios from 'axios';

import { LoginModel } from './loginModel';

import authConfig from 'core/configFiles/authSettings.json';

export const performSigninRequest = async (username: string, password: string) => {
  const loginConfig: LoginModel = {
    grant_type: authConfig.grantType,
    client_id: authConfig.clientId,
    username: username,
    password: password,
    client_secret: authConfig.clientSecret,
  };

  const response = await axios.post(authConfig.apiUrl, loginConfig);
  localStorage.setItem(
    'authInfo',
    JSON.stringify({ isAuth: true, accessToken: Object(response.data)['access_token'] })
  );
};
