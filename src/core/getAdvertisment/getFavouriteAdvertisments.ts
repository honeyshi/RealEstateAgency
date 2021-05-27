import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetFavouriteAdvertismentsRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/favorites`);
  return response.data;
};
