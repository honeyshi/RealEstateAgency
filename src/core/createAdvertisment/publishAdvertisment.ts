import { AdvertismentModel } from './advertismentModel';
import { IOwnerContactsInitialState } from 'data/reducers/ownerContactsReducer';
import { IPropertyDetailsInitialState } from 'data/reducers/propertyDetailsReducer';
import { IPropertyFacilitiesInitialState } from 'data/reducers/propertyFacilitiesReducer';
import { IPropertyPhotosInitialState } from 'data/reducers/propertyPhotosReducer';
import axios from 'axios';
import config from 'core/configFiles/appSettings.json';

export const performPublishAdvertismentRequest = async (
  propertyType: string,
  propertyDetails: IPropertyDetailsInitialState,
  propertyFacilities: IPropertyFacilitiesInitialState,
  propertyPhotos: IPropertyPhotosInitialState,
  ownerContacts: IOwnerContactsInitialState
) => {
  const advertismentConfig: AdvertismentModel = {
    type: propertyType,
    gps_point: propertyDetails.geoLocation,
    street: propertyDetails.street,
    house_number: propertyDetails.houseNumber,
    contact_phone: ownerContacts.telephoneNumber,
    house_floors: propertyDetails.totalFloors,
    apartment_floor: propertyDetails.currentFloor,
    apartment_area: propertyDetails.totalSpace,
    district: String(propertyDetails.district),
    price: ownerContacts.rentPayment,
    payment_condition: ownerContacts.rentPaymentRule,
    furniture: JSON.stringify(propertyFacilities.facilities.map(Number)),
    with_kids: propertyFacilities.livingRules.includes('Можно с детьми'),
    with_animals: propertyFacilities.livingRules.includes('Можно с животными'),
    deposit: ownerContacts.rentDeposit,
    images: JSON.stringify(propertyPhotos.photos),
    primary_image:
      propertyPhotos.primaryImage !== -1 ? String(propertyPhotos.primaryImage) : String(propertyPhotos.photos[0]),
    description: propertyFacilities.description,
    metro: String(propertyDetails.metro),
    rooms: propertyDetails.roomsAmount,
    renovation: propertyDetails.renovationType,
  };
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authInfo')}`;
  const response = await axios.post(`${config.apiUrl}/apartment`, advertismentConfig);
  return response.data.status;
};
