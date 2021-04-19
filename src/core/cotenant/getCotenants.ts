import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetCotenantsRequest = async (page: number) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.get(`${config.apiUrl}/tenant?page=${page}`);
  console.log(response);
  return response.data;
};
