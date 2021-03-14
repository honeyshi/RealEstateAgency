import { createAction } from '@reduxjs/toolkit';
import { PropertyFacilitiesActionTypes } from 'data/actionTypes';

export const setFacilities = createAction<string[]>(PropertyFacilitiesActionTypes.SET_FACILITIES);
export const setFurnitureType = createAction<string>(PropertyFacilitiesActionTypes.SET_FURNITURE_TYPE);
export const setLivingRules = createAction<string[]>(PropertyFacilitiesActionTypes.SET_LIVING_RULES);
export const setDescription = createAction<string>(PropertyFacilitiesActionTypes.SET_AD_DESCRIPTION);
