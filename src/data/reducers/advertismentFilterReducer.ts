import { createReducer } from '@reduxjs/toolkit';
import { setDistrictFilter, setPropertyTypeFilter } from 'data/actions';

interface IAdvertismentFilterInitialState {
  propertyType: string;
  districts: string[];
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: 'flat-type',
  districts: [],
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
});
