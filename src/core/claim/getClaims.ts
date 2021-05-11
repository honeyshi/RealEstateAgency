import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetClaimRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  return (await axios.get(`${config.apiUrl}/claim`)).data;
};
