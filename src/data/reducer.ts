import {
  advertismentFilterReducer,
  authorizationReducer,
  cotenantFilterReducer,
  newAdvertismentReducer,
  ownerContactsReducer,
  propertyDetailsReducer,
  propertyFacilitiesReducer,
  propertyPhotosReducer,
  userProfileReducer,
} from './reducers';

import { combineReducers } from 'redux';

export const appReducer = combineReducers({
  advertismentFilter: advertismentFilterReducer,
  authorization: authorizationReducer,
  cotenantFilter: cotenantFilterReducer,
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  propertyPhotos: propertyPhotosReducer,
  ownerContacts: ownerContactsReducer,
  newAdvertisment: newAdvertismentReducer,
  userProfile: userProfileReducer,
});
