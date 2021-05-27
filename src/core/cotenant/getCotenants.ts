import { AgeRange, Sex } from 'data/values';

import { Range } from 'react-input-range';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetCotenantsRequest = async (
  page: number,
  districts?: number[],
  cotenantAge?: Range | number,
  cotenantSex?: number,
  ownAge?: Range | number,
  ownSex?: number
) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;

  const districtQuery = districts && districts?.length !== 0 ? `district=${districts?.join(',')}` : '';
  const cotenantMinAgeQuery =
    cotenantAge && typeof cotenantAge !== 'number' && cotenantAge?.min !== AgeRange.min
      ? `author_min_age=${cotenantAge?.min}`
      : '';
  const cotenantMaxAgeQuery =
    cotenantAge && typeof cotenantAge !== 'number' && cotenantAge?.max !== AgeRange.max
      ? `author_max_age=${cotenantAge?.max}`
      : '';
  const cotenantSexQuery = cotenantSex && cotenantSex !== Sex.initial ? `author_sex=${cotenantSex}` : '';
  const ownAgeQuery = ownAge && ownAge !== AgeRange.min ? `user_age=${ownAge}` : '';
  const ownSexQuery = ownSex && ownSex !== Sex.initial ? `desired_sex=${ownSex}` : '';

  const finalQuery = [
    districtQuery,
    cotenantMinAgeQuery,
    cotenantMaxAgeQuery,
    cotenantSexQuery,
    ownAgeQuery,
    ownSexQuery,
  ]
    .filter(Boolean)
    .join('&');

  const response = await axios.get(`${config.apiUrl}/tenant?page=${page}${finalQuery && `&${finalQuery}`}`);
  return response.data;
};
