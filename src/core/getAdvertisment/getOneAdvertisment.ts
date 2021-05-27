import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetOneAdvertismentRequest = async (id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/apartment/${id}`);
  return response.data;
};
