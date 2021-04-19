import {
  cleanFilters,
  setAdvertismentPageFilter,
  setDistrictFilter,
  setFacilitiesFilter,
  setLivingRulesFilter,
  setPropertyTypeFilter,
  setRentPaymentFilter,
  setRoomsFilter,
  setSortingFilter,
  setSpaceFilter,
} from 'data/actions';

import { Range } from 'react-input-range';
import { createReducer } from '@reduxjs/toolkit';

interface IAdvertismentFilterInitialState {
  propertyType: string;
  districts: number[];
  rentPayment: Range | number;
  rooms: string[];
  space: Range | number;
  facilities: string[];
  livingRules: string[];
  sorting: string;
  activePage: number;
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: '1',
  districts: [],
  rentPayment: { min: 5, max: 300 },
  rooms: [],
  space: { min: 5, max: 300 },
  facilities: [],
  livingRules: [],
  sorting: '',
  activePage: 1,
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
  [setAdvertismentPageFilter.type]: (state, action) => {
    return {
      ...state,
      activePage: action.payload,
    };
  },
  [cleanFilters.type]: (state) => {
    return {
      ...advertismentFilterInitialState,
      activePage: state.activePage,
    };
  },
});
