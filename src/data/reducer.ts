import { combineReducers } from 'redux';

import { propertyDetailsReducer } from './reducers';

export const rootReducer = combineReducers({
  propertyDetails: propertyDetailsReducer,
});
