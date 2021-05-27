import { districts, metroValues } from 'data/values';

import { AdvertismentModel } from 'core/createAdvertisment/advertismentModel';
import { OneAdvertismentModel } from 'core/getAdvertisment/advertismentModel';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performEditAdvertismentRequest = async (
  currentAdvertisment: OneAdvertismentModel,
  id: string,
  phone: string,
  deposit: string,
  payment: string,
  description: string
) => {
  const advertismentConfig: AdvertismentModel = {
    ...currentAdvertisment,
    contact_phone: phone,
    type: String(currentAdvertisment.type),
    house_floors: String(currentAdvertisment.house_floors),
    apartment_floor: currentAdvertisment.apartment_floor === null ? '' : String(currentAdvertisment.apartment_floor),
    apartment_area: String(currentAdvertisment.apartment_area),
    district: String(districts.indexOf(currentAdvertisment.district)),
    price: payment,
    payment_condition: String(currentAdvertisment.payment_condition),
    with_kids: currentAdvertisment.with_kids === 1,
    with_animals: currentAdvertisment.with_animals === 1,
    deposit: deposit,
    images: JSON.stringify(
      currentAdvertisment.images.map((image) => {
        return image.id;
      })
    ),
    primary_image: String(
      currentAdvertisment.images.map((image) => {
        return image.id;
      })[0]
    ),
    description: description,
    metro:
      metroValues.indexOf(currentAdvertisment.metro) === -1
        ? '0'
        : String(metroValues.indexOf(currentAdvertisment.metro)),
    rooms: currentAdvertisment.rooms === null ? '' : String(currentAdvertisment.rooms),
    renovation: String(currentAdvertisment.renovation),
  };
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.put(`${config.apiUrl}/apartment/${id}`, advertismentConfig);
  return response.data;
};
