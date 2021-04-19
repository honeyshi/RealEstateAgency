import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performDeleteFromFavouriteRequest = async (id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.delete(`${config.apiUrl}/favorites/${id}`);
  return response.data;
};
