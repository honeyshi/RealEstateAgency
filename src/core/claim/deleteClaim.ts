import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performDeleteClaimRequest = async (id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  await axios.delete(`${config.apiUrl}/claim/${id}`);
};
