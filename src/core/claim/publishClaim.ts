import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performPublishClaimRequest = async (id: string, text: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  await axios.post(`${config.apiUrl}/claim`, { apartment_id: id, text: text });
};
