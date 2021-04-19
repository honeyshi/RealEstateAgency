import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performAddToFavouriteRequest = async (id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.post(`${config.apiUrl}/favorites`, { id: id });
  return response.data;
};
