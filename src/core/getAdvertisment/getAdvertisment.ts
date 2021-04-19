import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetAdvertismentRequest = async (page: number) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/apartments/${page}`);
  console.log(response);
  return response.data;
};
