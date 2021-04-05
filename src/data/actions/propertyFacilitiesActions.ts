import { PropertyFacilitiesActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setFacilities = createAction<string[]>(PropertyFacilitiesActionTypes.SET_FACILITIES);
export const setLivingRules = createAction<string[]>(PropertyFacilitiesActionTypes.SET_LIVING_RULES);
export const setDescription = createAction<string>(PropertyFacilitiesActionTypes.SET_AD_DESCRIPTION);
