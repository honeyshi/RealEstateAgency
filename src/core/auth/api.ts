import { LoginModel } from './loginModel';
import authConfig from 'core/configFiles/authSettings.json';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performSigninRequest = async (username: string, password: string) => {
  const loginConfig: LoginModel = {
    grant_type: authConfig.grantType,
    client_id: authConfig.clientId,
    username: username,
    password: password,
    client_secret: authConfig.clientSecret,
  };

  const response = await axios.post(authConfig.apiUrl, loginConfig);
  localStorage.setItem('authInfo', Object(response.data)['access_token']);

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;

  const getResponse = await axios.get(`${config.apiUrl}/user`);
  localStorage.setItem('userRole', Object(getResponse.data)['role']);
};
