import { CotenantFilterActionTypes } from 'data/actionTypes';
import { Range } from 'react-input-range';
import { Sex } from 'data/values';
import { createAction } from '@reduxjs/toolkit';

export const setCotenantDistrictFilter = createAction<number[]>(CotenantFilterActionTypes.SET_COTENANT_DISTRICT_FILTER);
export const setCotenantSexFilter = createAction<Sex>(CotenantFilterActionTypes.SET_COTENANT_SEX_FILTER);
export const setCotenantAgeFilter = createAction<Range | number>(CotenantFilterActionTypes.SET_COTENANT_AGE_FILTER);
export const setOwnCotenantSexFilter = createAction<Sex>(CotenantFilterActionTypes.SET_OWN_COTENANT_SEX_FILTER);
export const setOwnCotenantAgeFilter = createAction<Range | number>(
  CotenantFilterActionTypes.SET_OWN_COTENANT_AGE_FILTER
);
export const setApplyCotenantFilter = createAction<boolean>(CotenantFilterActionTypes.SET_APPLY_COTENANT_FILTER);
export const setWithCotenantFilter = createAction<boolean>(CotenantFilterActionTypes.SET_WITH_COTENANT_FILTER);
