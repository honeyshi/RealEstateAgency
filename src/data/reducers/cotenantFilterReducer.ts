import {
  cleanCotenantFilters,
  setCotenantAgeFilter,
  setCotenantDistrictFilter,
  setCotenantSexFilter,
  setOwnCotenantAgeFilter,
  setOwnCotenantSexFilter,
} from 'data/actions';
import { setApplyCotenantFilter, setWithCotenantFilter } from 'data/actions/cotenantFilterActions';

import { Range } from 'react-input-range';
import { Sex } from 'data/values';
import { createReducer } from '@reduxjs/toolkit';

interface ICotenantFilterInitialState {
  districts: number[];
  cotenantAge: Range | number;
  cotenantSex: Sex;
  ownAge: Range | number;
  ownSex: Sex;
  apply: boolean;
  withFilter: boolean;
}

const cotenantFilterInitialState: ICotenantFilterInitialState = {
  districts: [],
  cotenantAge: { min: 18, max: 70 },
  cotenantSex: Sex.initial,
  ownAge: 18,
  ownSex: Sex.initial,
  apply: false,
  withFilter: false,
};

export const cotenantFilterReducer = createReducer(cotenantFilterInitialState, {
  [setCotenantDistrictFilter.type]: (state, action) => {
    return {
      ...state,
      districts: action.payload,
    };
  },
  [setCotenantAgeFilter.type]: (state, action) => {
    return {
      ...state,
      cotenantAge: action.payload,
    };
  },
  [setCotenantSexFilter.type]: (state, action) => {
    return {
      ...state,
      cotenantSex: action.payload,
    };
  },
  [setOwnCotenantAgeFilter.type]: (state, action) => {
    return {
      ...state,
      ownAge: action.payload,
    };
  },
  [setOwnCotenantSexFilter.type]: (state, action) => {
    return {
      ...state,
      ownSex: action.payload,
    };
  },
  [setApplyCotenantFilter.type]: (state, action) => {
    return {
      ...state,
      apply: action.payload,
    };
  },
  [setWithCotenantFilter.type]: (state, action) => {
    return {
      ...state,
      withFilter: action.payload,
    };
  },
  [cleanCotenantFilters.type]: () => {
    return {
      ...cotenantFilterInitialState,
    };
  },
});
