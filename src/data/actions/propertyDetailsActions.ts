import { createAction } from '@reduxjs/toolkit';
import { PropertyDetailsActionTypes } from 'data/actionTypes';

export const setRoomsAmount = createAction<string>(PropertyDetailsActionTypes.SET_ROOMS_AMOUNT);
export const setRoomsRentAmount = createAction<string>(PropertyDetailsActionTypes.SET_RENT_ROOMS_AMOUNT);
export const setCurrentFloor = createAction<string>(PropertyDetailsActionTypes.SET_CURRENT_FLOOR);
export const setTotalFloors = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_FLOORS);
export const setTotalSpace = createAction<string>(PropertyDetailsActionTypes.SET_TOTAL_SPACE);
export const setRenovationType = createAction<string>(PropertyDetailsActionTypes.SET_RENOVATION_TYPE);
