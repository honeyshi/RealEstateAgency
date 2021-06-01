import { AreaPriceRange, orderNameToQuery } from 'data/values';

import { Range } from 'react-input-range';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performGetAdvertismentRequest = async (
  page: number,
  sorting: string,
  propertyType?: string,
  districts?: number[],
  rentPayment?: Range | number,
  rooms?: string[],
  space?: Range | number,
  facilities?: string[],
  livingRules?: string[]
) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;

  let sortingQuery = orderNameToQuery.has(sorting) ? `order_by=${orderNameToQuery.get(sorting)}` : '';

  const propertyTypeQuery = propertyType ? `type=${propertyType}` : '';
  const districtQuery = districts && districts?.length !== 0 ? `district=${districts.join(',')}` : '';
  const minRentQuery =
    rentPayment && typeof rentPayment !== 'number' && rentPayment.min !== AreaPriceRange.min
      ? `min_price=${rentPayment.min}000`
      : '';
  const maxRentQuery =
    rentPayment && typeof rentPayment !== 'number' && rentPayment.max !== AreaPriceRange.max
      ? `max_price=${rentPayment.max}000`
      : '';
  const roomsQuery = rooms && rooms.length !== 0 ? `rooms=${rooms.join(',')}` : '';
  const minSpaceQuery =
    space && typeof space !== 'number' && space.min !== AreaPriceRange.min ? `min_area=${space.min}` : '';
  const maxSpaceQuery =
    space && typeof space !== 'number' && space.max !== AreaPriceRange.max ? `max_area=${space.max}` : '';
  const furnitureQuery = facilities && facilities.length !== 0 ? `furniture=${facilities.join(',')}` : '';
  const withKidsQuery = livingRules && livingRules.includes('filter-with-kids') ? 'with_kids=1' : '';
  const withAnimalsQuery = livingRules && livingRules.includes('filter-with-animals') ? 'with_animals=1' : '';
  const withoutDepositQuery = livingRules && livingRules.includes('filter-without-deposit') ? 'without_deposit=1' : '';
  const onlyRentQuery = livingRules && livingRules.includes('filter-only-rent') ? 'only_rent=1' : '';

  const finalQuery = [
    propertyTypeQuery,
    districtQuery,
    minRentQuery,
    maxRentQuery,
    roomsQuery,
    minSpaceQuery,
    maxSpaceQuery,
    furnitureQuery,
    withKidsQuery,
    withAnimalsQuery,
    withoutDepositQuery,
    onlyRentQuery,
  ]
    .filter(Boolean)
    .join('&');

  if (sortingQuery) finalQuery ? (sortingQuery = '&' + sortingQuery) : (sortingQuery = '?' + sortingQuery);

  const response = await axios.get(
    `${config.apiUrl}/apartments/${page}${finalQuery && `?${finalQuery}`}${sortingQuery && sortingQuery}`
  );
  return response.data;
};
