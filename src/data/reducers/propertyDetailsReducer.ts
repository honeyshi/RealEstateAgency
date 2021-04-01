import * as Action from 'data/actions';

import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

import { createReducer } from '@reduxjs/toolkit';

export interface IPropertyDetailsInitialState {
  address: DaDataSuggestion<DaDataAddress> | undefined;
  district: number;
  metro: number;
  street: string;
  houseNumber: string;
  geoLocation: string;
  roomsAmount: string;
  currentFloor: string;
  totalFloors: string;
  totalSpace: string;
  renovationType: string;
}

const propertyDetailsInitialState: IPropertyDetailsInitialState = {
  address: undefined,
  district: -1,
  metro: 0,
  street: '',
  houseNumber: '',
  geoLocation: '',
  roomsAmount: '',
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
  [Action.setCreateAdAddress.type]: (state, action) => {
    return {
      ...state,
      address: action.payload,
    };
  },
  [Action.setCreateAdStreet.type]: (state, action) => {
    return {
      ...state,
      street: action.payload,
    };
  },
  [Action.setCreateAdHouseNumber.type]: (state, action) => {
    return {
      ...state,
      houseNumber: action.payload,
    };
  },
  [Action.setCreateAdGeo.type]: (state, action) => {
    return {
      ...state,
      geoLocation: action.payload,
    };
  },
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
