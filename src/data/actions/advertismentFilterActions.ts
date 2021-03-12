import { createAction } from '@reduxjs/toolkit';
import { AdvertismentFilterActionTypes } from 'data/actionTypes';

export const setPropertyTypeFilter = createAction<string>(AdvertismentFilterActionTypes.SET_PROPERTY_TYPE);
export const setDistrictFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_DISTRICT);
