import { createReducer } from '@reduxjs/toolkit';
import { setPropertyTypeFilter } from 'data/actions';

interface IAdvertismentFilterInitialState {
  propertyType: string;
}

const advertismentFilterInitialState: IAdvertismentFilterInitialState = {
  propertyType: 'flat-type',
};

export const advertismentFilterReducer = createReducer(advertismentFilterInitialState, {
  [setPropertyTypeFilter.type]: (state, action) => {
    return {
      ...state,
      propertyType: action.payload,
    };
  },
});
