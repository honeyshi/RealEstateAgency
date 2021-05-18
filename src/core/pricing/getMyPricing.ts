import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetMyPricingRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/user`);
  return response.data[0].active_orders;
};
