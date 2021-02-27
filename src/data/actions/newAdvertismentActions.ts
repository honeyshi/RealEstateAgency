import { createAction } from '@reduxjs/toolkit';
import { NewAdvertismentActionTypes } from 'data/actionTypes';

export const setActiveStep = createAction<number>(NewAdvertismentActionTypes.SET_ACTIVE_STEP);
export const setPropertyType = createAction<string>(NewAdvertismentActionTypes.SET_PROPERTY_TYPE);
export const setWrongSteps = createAction<number[]>(NewAdvertismentActionTypes.SET_WRONG_STEPS);
export const setValidatedForm = createAction<boolean>(NewAdvertismentActionTypes.SET_VALIDATED_FORM);
