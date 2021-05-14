import { AreaPriceRange } from 'data/values';
import { Subscription } from './subscription';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performCreateSubscriptionRequest = async (form: Subscription) => {
  const request = {
    type: form.propertyType,
    furniture: JSON.stringify(form.facilities),
    rooms: JSON.stringify(form.rooms),
    district: JSON.stringify(form.districts),
    min_price: typeof form.rentPayment !== 'number' ? `${form.rentPayment.min}000` : `${AreaPriceRange.min}000`,
    max_price: typeof form.rentPayment !== 'number' ? `${form.rentPayment.max}000` : `${AreaPriceRange.max}000`,
    min_area: typeof form.space !== 'number' ? `${form.space.min}` : `${AreaPriceRange.min}`,
    max_area: typeof form.space !== 'number' ? `${form.space.max}` : `${AreaPriceRange.max}`,
    with_kids: form.livingRules.includes('filter-with-kids'),
    with_animals: form.livingRules.includes('filter-with-animals'),
    without_deposit: form.livingRules.includes('filter-without-deposit'),
    only_rent: form.livingRules.includes('filter-only-rent'),
  };
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  await axios.post(`${config.apiUrl}/subscription`, request);
};
