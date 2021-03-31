import axios from 'axios';

import config from 'core/configFiles/appSettings.json';

export const performUploadImageRequest = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${config.apiUrl}/apartments/loadImage`, formData);
  return response.data.id;
};
