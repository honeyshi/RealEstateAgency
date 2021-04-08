import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetUserInfoRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/user`);

  return response.data;
};
