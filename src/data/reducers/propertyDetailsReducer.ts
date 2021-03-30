import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

export interface IPropertyDetailsInitialState {
  district: number;
  metro: number;
  roomsAmount: string;
  roomsRentAmount: string;
  currentFloor: string;
  totalFloors: string;
  totalSpace: string;
  renovationType: string;
}

const propertyDetailsInitialState: IPropertyDetailsInitialState = {
  district: -1,
  metro: 0,
  roomsAmount: '',
  roomsRentAmount: '',
  currentFloor: '',
  totalFloors: '',
  totalSpace: '',
  renovationType: '',
};

export const propertyDetailsReducer = createReducer(propertyDetailsInitialState, {
  [Action.setCreateAdDistrict.type]: (state, action) => {
    return {
      ...state,
      district: action.payload,
    };
  },
  [Action.setCreateAdMetro.type]: (state, action) => {
    return {
      ...state,
      metro: action.payload,
    };
  },
  [Action.setRoomsAmount.type]: (state, action) => {
    return {
      ...state,
      roomsAmount: action.payload,
    };
  },
  [Action.setRoomsRentAmount.type]: (state, action) => {
    return {
      ...state,
      roomsRentAmount: action.payload,
    };
  },
  [Action.setCurrentFloor.type]: (state, action) => {
    return {
      ...state,
      currentFloor: action.payload,
    };
  },
  [Action.setTotalFloors.type]: (state, action) => {
    return {
      ...state,
      totalFloors: action.payload,
    };
  },
  [Action.setTotalSpace.type]: (state, action) => {
    return {
      ...state,
      totalSpace: action.payload,
    };
  },
  [Action.setRenovationType.type]: (state, action) => {
    return {
      ...state,
      renovationType: action.payload,
    };
  },
  [Action.cleanPropertyDetails.type]: () => {
    return {
      ...propertyDetailsInitialState,
    };
  },
  [Action.cleanNewAdvertisment.type]: () => {
    return {
      ...propertyDetailsInitialState,
    };
  },
});
