import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetOneSubscriptionRequest = async (id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/subscription/${id}`);
  return response.data;
};
