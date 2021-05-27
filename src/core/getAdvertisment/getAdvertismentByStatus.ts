import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetAdvertismentByStatusRequest = async (status: number, page: number) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/apartments/status/${status}/page/${page}`);
  return response.data;
};
