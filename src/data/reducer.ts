import { combineReducers } from 'redux';
import {
  propertyDetailsReducer,
  newAdvertismentReducer,
  propertyFacilitiesReducer,
  propertyPhotosReducer,
  ownerContactsReducer,
  advertismentFilterReducer,
} from './reducers';

export const appReducer = combineReducers({
  advertismentFilter: advertismentFilterReducer,
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  propertyPhotos: propertyPhotosReducer,
  ownerContacts: ownerContactsReducer,
  newAdvertisment: newAdvertismentReducer,
});
