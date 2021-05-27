import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetUsersRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/users`);
  return response.data;
};
