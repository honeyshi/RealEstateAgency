import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performSendResetPasswordLinkRequest = async (email: string) => {
  await axios.post(`${config.apiUrl}/restorePassword`, { email: email });
};
