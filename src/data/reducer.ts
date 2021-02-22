import { combineReducers } from 'redux';
import { propertyDetailsReducer, newAdvertismentReducer, propertyFacilitiesReducer } from './reducers';

export const appReducer = combineReducers({
  propertyDetails: propertyDetailsReducer,
  propertyFacilities: propertyFacilitiesReducer,
  newAdvertisment: newAdvertismentReducer,
});
