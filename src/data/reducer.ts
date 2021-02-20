import { combineReducers } from 'redux';
import { propertyDetailsReducer, newAdvertismentReducer } from './reducers';

export const appReducer = combineReducers({
  propertyDetails: propertyDetailsReducer,
  newAdvertisment: newAdvertismentReducer,
});
