import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

export interface IPropertyDetailsInitialState {
  roomsAmount: string;
  roomsRentAmount: string;
  currentFloor: string;
  totalFloors: string;
  totalSpace: string;
  livingSpace: string;
  kitchenSpace: string;
  bathroomType: string;
  renovationType: string;
  houseType: string;
  showerType: string;
}

const propertyDetailsInitialState: IPropertyDetailsInitialState = {
  roomsAmount: '',
  roomsRentAmount: '',
  currentFloor: '',
  totalFloors: '',
  totalSpace: '',
  livingSpace: '',
  kitchenSpace: '',
  bathroomType: '',
  renovationType: '',
  houseType: '',
  showerType: '',
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
  [Action.setHouseType.type]: (state, action) => {
    return {
      ...state,
      houseType: action.payload,
    };
  },
  [Action.setShowerType.type]: (state, action) => {
    return {
      ...state,
      showerType: action.payload,
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
