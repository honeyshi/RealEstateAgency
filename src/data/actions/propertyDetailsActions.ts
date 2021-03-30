import { createAction } from '@reduxjs/toolkit';
import { PropertyDetailsActionTypes } from 'data/actionTypes';

export const setCreateAdDistrict = createAction<number>(PropertyDetailsActionTypes.SET_DISTRICT);
export const setCreateAdMetro = createAction<number>(PropertyDetailsActionTypes.SET_METRO);
export const setCreateAdStreet = createAction<string>(PropertyDetailsActionTypes.SET_STREET);
export const setCreateAdHouseNumber = createAction<string>(PropertyDetailsActionTypes.SET_HOUSE_NUMBER);
export const setCreateAdGeo = createAction<string>(PropertyDetailsActionTypes.SET_GEO);
export const setRoomsAmount = createAction<string>(PropertyDetailsActionTypes.SET_ROOMS_AMOUNT);
export const setRoomsRentAmount = createAction<string>(PropertyDetailsActionTypes.SET_RENT_ROOMS_AMOUNT);
export const setCurrentFloor = createAction<string>(PropertyDetailsActionTypes.SET_CURRENT_FLOOR);
export const setTotalFloors = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_FLOORS);
export const setTotalSpace = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_SPACE);
export const setRenovationType = createAction<string>(PropertyDetailsActionTypes.SET_RENOVATION_TYPE);
