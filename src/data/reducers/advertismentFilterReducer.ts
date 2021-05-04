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
import { setApplyFilter, setWithFilter } from 'data/actions/advertismentFilterActions';

import { AreaPriceRange } from 'data/values';
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
  apply: boolean;
  withFilter: boolean;
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: '1',
  districts: [],
  rentPayment: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  rooms: [],
  space: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  facilities: [],
  livingRules: [],
  sorting: '',
  activePage: 1,
  apply: false,
  withFilter: false,
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
  [setApplyFilter.type]: (state, action) => {
    return {
      ...state,
      apply: action.payload,
    };
  },
  [setWithFilter.type]: (state, action) => {
    return {
      ...state,
      withFilter: action.payload,
    };
  },
  [cleanFilters.type]: (state) => {
    return {
      ...advertismentFilterInitialState,
      activePage: state.activePage,
    };
  },
});
