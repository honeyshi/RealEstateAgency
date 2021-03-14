import { createReducer } from '@reduxjs/toolkit';
import { setDistrictFilter, setFacilitiesFilter, setLivingRulesFilter, setPropertyTypeFilter } from 'data/actions';

interface IAdvertismentFilterInitialState {
  propertyType: string;
  districts: string[];
  facilities: string[];
  livingRules: string[];
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: 'flat-type',
  districts: [],
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
});
