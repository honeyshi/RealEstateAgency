import { combineReducers } from 'redux';
import {
  propertyDetailsReducer,
  newAdvertismentReducer,
  propertyFacilitiesReducer,
  propertyPhotosReducer,
  ownerContactsReducer,
  advertismentFilterReducer,
  authorizationReducer,
} from './reducers';

export const appReducer = combineReducers({
  advertismentFilter: advertismentFilterReducer,
  authorization: authorizationReducer,
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  propertyPhotos: propertyPhotosReducer,
  ownerContacts: ownerContactsReducer,
  newAdvertisment: newAdvertismentReducer,
});
