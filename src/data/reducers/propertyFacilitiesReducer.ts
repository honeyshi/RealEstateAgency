import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

export interface IPropertyFacilitiesInitialState {
  facilities: string[];
  furnitureType: string;
  livingRules: string[];
  description: string;
}

const propertyFacilitiesInitialState: IPropertyFacilitiesInitialState = {
  facilities: [],
  furnitureType: '',
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
  [Action.setFurnitureType.type]: (state, action) => {
    return {
      ...state,
      furnitureType: action.payload,
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
