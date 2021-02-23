import { combineReducers } from 'redux';
import {
  propertyDetailsReducer,
  newAdvertismentReducer,
  propertyFacilitiesReducer,
  propertyPhotosReducer,
} from './reducers';

export const appReducer = combineReducers({
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  propertyPhotos: propertyPhotosReducer,
  newAdvertisment: newAdvertismentReducer,
});
