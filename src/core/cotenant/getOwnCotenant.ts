import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetOwnCotenantRequest = async () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/tenant/my`);
  console.log(response);
  return response.data;
};
