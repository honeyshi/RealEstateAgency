import { CotenantEdit } from './cotenantModel';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performEditCotenantRequest = async (request: CotenantEdit, image: FormData, id: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const formData = new FormData();
  formData.append('author_sex', String(request.ownSex));
  formData.append('author_age', String(request.age));
  formData.append('district', String(request.district));
  formData.append('desired_sex', String(request.cotenantSex));
  formData.append(
    'desired_min_age',
    typeof request.cotenantAge !== 'number' ? String(request.cotenantAge.min) : String(request.cotenantAge)
  );
  formData.append(
    'desired_max_age',
    typeof request.cotenantAge !== 'number' ? String(request.cotenantAge.max) : String(request.cotenantAge)
  );
  formData.append('text', request.description);
  formData.append('phone', request.phone);
  // for php bug
  formData.append('_method', 'PUT');
  image.has('image') && formData.append('image', image.get('image') as Blob);

  await axios.post(`${config.apiUrl}/tenant/${id}`, formData);
};
