import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetOwnAdvertismentsRequest = async (page: number) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/apartments/my/${page}`);
  console.log(response);
  return response.data;
};
