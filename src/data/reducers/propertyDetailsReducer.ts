import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

export interface IPropertyDetailsInitialState {
  roomsAmount: string;
  roomsRentAmount: string;
  currentFloor: string;
  totalFloors: string;
  totalSpace: string;
  renovationType: string;
}

const propertyDetailsInitialState: IPropertyDetailsInitialState = {
  roomsAmount: '',
  roomsRentAmount: '',
  currentFloor: '',
  totalFloors: '',
  totalSpace: '',
  renovationType: '',
};

export const propertyDetailsReducer = createReducer(propertyDetailsInitialState, {
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
