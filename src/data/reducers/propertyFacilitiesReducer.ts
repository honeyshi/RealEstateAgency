import * as Action from 'data/actions';

import { createReducer } from '@reduxjs/toolkit';

export interface IPropertyFacilitiesInitialState {
  facilities: string[];
  livingRules: string[];
  description: string;
}

const propertyFacilitiesInitialState: IPropertyFacilitiesInitialState = {
  facilities: [],
  livingRules: [],
  description: '',
};

export const propertyFacilitiesReducer = createReducer(propertyFacilitiesInitialState, {
  [Action.setFacilities.type]: (state, action) => {
    return {
      ...state,
      facilities: action.payload,
    };
  },
  [Action.setLivingRules.type]: (state, action) => {
    return {
      ...state,
      livingRules: action.payload,
    };
  },
  [Action.setDescription.type]: (state, action) => {
    return {
      ...state,
      description: action.payload,
    };
  },
  [Action.cleanNewAdvertisment.type]: () => {
    return {
      ...propertyFacilitiesInitialState,
    };
  },
});
