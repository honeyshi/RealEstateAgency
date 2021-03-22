import { createReducer } from '@reduxjs/toolkit';
import { Range } from 'react-input-range';
import {
  cleanFilters,
  setDistrictFilter,
  setFacilitiesFilter,
  setLivingRulesFilter,
  setPropertyTypeFilter,
  setRentPaymentFilter,
  setRoomsFilter,
  setSortingFilter,
  setSpaceFilter,
} from 'data/actions';

interface IAdvertismentFilterInitialState {
  propertyType: string;
  districts: string[];
  rentPayment: Range | number;
  rooms: string[];
  space: Range | number;
  facilities: string[];
  livingRules: string[];
  sorting: string;
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: 'flat-type',
  districts: [],
  rentPayment: { min: 5, max: 300 },
  rooms: [],
  space: { min: 5, max: 300 },
  facilities: [],
  livingRules: [],
  sorting: '',
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
  [setRentPaymentFilter.type]: (state, action) => {
    return {
      ...state,
      rentPayment: action.payload,
    };
  },
  [setRoomsFilter.type]: (state, action) => {
    return {
      ...state,
      rooms: action.payload,
    };
  },
  [setSpaceFilter.type]: (state, action) => {
    return {
      ...state,
      space: action.payload,
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
  [setSortingFilter.type]: (state, action) => {
    return {
      ...state,
      sorting: action.payload,
    };
  },
  [cleanFilters.type]: () => {
    return {
      ...advertismentFilterInitialState,
    };
  },
});
