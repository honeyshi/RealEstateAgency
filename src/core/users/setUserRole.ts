import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performUpdateUserRoleRequest = async (role: string, id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  await axios.put(`${config.apiUrl}/users/${id}`, { role: role });
};
