import axios from 'axios';

import { SignupModel } from './signupModel';

import config from 'core/configFiles/appSettings.json';

export const performSignupRequest = async (name: string, email: string, password: string) => {
  const signupConfig: SignupModel = {
    name: name,
    email: email,
    password: password,
  };
  const response = await axios.post(`${config.apiUrl}/signup`, signupConfig);
  const json = response.data;
  if (Object.keys(json).includes('error')) {
    if ([...Object(JSON.parse(json.fields))['email']].includes('validation.unique'))
      throw new Error('Пользователь с таким Email уже зарегистрирован');
  } else localStorage.setItem('authInfo', JSON.stringify({ isAuth: true, accessToken: Object(json)['accessToken'] }));
};
