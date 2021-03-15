import { createReducer } from '@reduxjs/toolkit';
import {
  cleanFilters,
  setDistrictFilter,
  setFacilitiesFilter,
  setLivingRulesFilter,
  setPropertyTypeFilter,
  setRoomsFilter,
} from 'data/actions';

interface IAdvertismentFilterInitialState {
  propertyType: string;
  districts: string[];
  rooms: string[];
  facilities: string[];
  livingRules: string[];
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: 'flat-type',
  districts: [],
  rooms: [],
  facilities: [],
  livingRules: [],
};

export const advertismentFilterReducer = createReducer(advertismentFilterInitialState, {
  [setPropertyTypeFilter.type]: (state, action) => {
    return {
      ...state,
      propertyType: action.payload,
    };
  },
  [setDistrictFilter.type]: (state, action) => {
    return {
      ...state,
      districts: action.payload,
    };
  },
  [setRoomsFilter.type]: (state, action) => {
    return {
      ...state,
      rooms: action.payload,
    };
  },
  [setFacilitiesFilter.type]: (state, action) => {
    return {
      ...state,
      facilities: action.payload,
    };
  },
  [setLivingRulesFilter.type]: (state, action) => {
    return {
      ...state,
      livingRules: action.payload,
    };
  },
  [cleanFilters.type]: () => {
    return {
      ...advertismentFilterInitialState,
    };
  },
});
