import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

import { PropertyDetailsActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setCreateAdDistrict = createAction<number>(PropertyDetailsActionTypes.SET_DISTRICT);
export const setCreateAdMetro = createAction<number>(PropertyDetailsActionTypes.SET_METRO);
export const setCreateAdAddress = createAction<DaDataSuggestion<DaDataAddress> | undefined>(
  PropertyDetailsActionTypes.SET_ADDRESS
);
export const setCreateAdStreet = createAction<string>(PropertyDetailsActionTypes.SET_STREET);
export const setCreateAdHouseNumber = createAction<string>(PropertyDetailsActionTypes.SET_HOUSE_NUMBER);
export const setCreateAdGeo = createAction<string>(PropertyDetailsActionTypes.SET_GEO);
export const setRoomsAmount = createAction<string>(PropertyDetailsActionTypes.SET_ROOMS_AMOUNT);
export const setCurrentFloor = createAction<string>(PropertyDetailsActionTypes.SET_CURRENT_FLOOR);
export const setTotalFloors = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_FLOORS);
export const setTotalSpace = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_SPACE);
export const setRenovationType = createAction<string>(PropertyDetailsActionTypes.SET_RENOVATION_TYPE);
