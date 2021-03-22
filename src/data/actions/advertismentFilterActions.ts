import { createAction } from '@reduxjs/toolkit';
import { Range } from 'react-input-range';
import { AdvertismentFilterActionTypes } from 'data/actionTypes';

export const setPropertyTypeFilter = createAction<string>(AdvertismentFilterActionTypes.SET_PROPERTY_TYPE);
export const setDistrictFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_DISTRICT);
export const setRentPaymentFilter = createAction<Range | number>(AdvertismentFilterActionTypes.SET_RENT_PAYMENT);
export const setRoomsFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_ROOMS);
export const setSpaceFilter = createAction<Range | number>(AdvertismentFilterActionTypes.SET_SPACE);
export const setFacilitiesFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_FACILITIES);
export const setLivingRulesFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_LIVING_RULES);
export const setSortingFilter = createAction<string>(AdvertismentFilterActionTypes.SET_SORTING);
