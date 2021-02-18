import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

interface IPropertyDetailsInitialState {
  roomsAmount: string;
  currentFloor: string;
  totalFloors: string;
  totalSpace: string;
  livingSpace: string;
  kitchenSpace: string;
  bathroomType: string;
  renovationType: string;
}

const propertyDetailsInitialState: IPropertyDetailsInitialState = {
  roomsAmount: '',
  currentFloor: '',
  totalFloors: '',
  totalSpace: '',
  livingSpace: '',
  kitchenSpace: '',
  bathroomType: '',
  renovationType: '',
};

export const propertyDetailsReducer = createReducer(propertyDetailsInitialState, {
  [Action.setRoomsAmount.type]: (state, action) => {
    return {
      ...state,
      roomsAmount: action.payload,
    };
  },
  [Action.setCurrentFloor.type]: (state, action) => {
    return {
      ...state,
      currentFloor: action.payload,
    };
  },
  [Action.setTotalSpace.type]: (state, action) => {
    return {
      ...state,
      totalSpace: action.payload,
    };
  },
  [Action.setLivingSpace.type]: (state, action) => {
    return {
      ...state,
      livingSpace: action.payload,
    };
  },
  [Action.setKitchenSpace.type]: (state, action) => {
    return {
      ...state,
      kitchenSpace: action.payload,
    };
  },
  [Action.setBathroomType.type]: (state, action) => {
    return {
      ...state,
      bathroomType: action.payload,
    };
  },
  [Action.setRenovationType.type]: (state, action) => {
    return {
      ...state,
      renovationType: action.payload,
    };
  },
});
