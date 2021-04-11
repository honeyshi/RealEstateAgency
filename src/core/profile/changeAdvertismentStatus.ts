import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performChangeAdvertismentStatusRequest = async (id: string, status: number) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.put(`${config.apiUrl}/apartment/${id}/changeStatus`, { status: status });
  return response.data;
};
