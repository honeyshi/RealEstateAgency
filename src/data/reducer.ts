import { combineReducers } from 'redux';
import {
  propertyDetailsReducer,
  newAdvertismentReducer,
  propertyFacilitiesReducer,
  propertyPhotosReducer,
  ownerContactsReducer,
} from './reducers';

export const appReducer = combineReducers({
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  propertyPhotos: propertyPhotosReducer,
  ownerContacts: ownerContactsReducer,
  newAdvertisment: newAdvertismentReducer,
});
