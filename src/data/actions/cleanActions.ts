import { createAction } from '@reduxjs/toolkit';
import { CleanActionTypes } from 'data/actionTypes';

export const cleanPropertyDetails = createAction(CleanActionTypes.CLEAN_PROPERTY_DETAILS);
