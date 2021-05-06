import { CleanActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const cleanPropertyDetails = createAction(CleanActionTypes.CLEAN_PROPERTY_DETAILS);
export const cleanNewAdvertisment = createAction(CleanActionTypes.CLEAN_NEW_ADVERTISMENT);
export const cleanFilters = createAction(CleanActionTypes.CLEAN_FILTERS);
export const cleanCotenantFilters = createAction(CleanActionTypes.CLEAN_COTENANT_FILTERS);
