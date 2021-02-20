import { createAction } from '@reduxjs/toolkit';
import { NewAdvertismentActionTypes } from 'data/actionTypes';

export const setActiveStep = createAction<number>(NewAdvertismentActionTypes.SET_ACTIVE_STEP);
