import { AdvertismentFilterActionTypes } from 'data/actionTypes';
import { Range } from 'react-input-range';
import { createAction } from '@reduxjs/toolkit';

export const setPropertyTypeFilter = createAction<string>(AdvertismentFilterActionTypes.SET_PROPERTY_TYPE_FILTER);
export const setDistrictFilter = createAction<number[]>(AdvertismentFilterActionTypes.SET_DISTRICT_FILTER);
export const setRentPaymentFilter = createAction<Range | number>(AdvertismentFilterActionTypes.SET_RENT_PAYMENT_FILTER);
export const setRoomsFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_ROOMS_FILTER);
export const setSpaceFilter = createAction<Range | number>(AdvertismentFilterActionTypes.SET_SPACE_FILTER);
export const setFacilitiesFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_FACILITIES_FILTER);
export const setLivingRulesFilter = createAction<string[]>(AdvertismentFilterActionTypes.SET_LIVING_RULES_FILTER);
export const setSortingFilter = createAction<string>(AdvertismentFilterActionTypes.SET_SORTING_FILTER);
export const setAdvertismentPageFilter = createAction<number>(AdvertismentFilterActionTypes.SET_ACTIVE_PAGE_FILTER);
export const setApplyFilter = createAction<boolean>(AdvertismentFilterActionTypes.SET_APPLY_FILTER);
export const setWithFilter = createAction<boolean>(AdvertismentFilterActionTypes.SET_WITH_FILTER);
