import { cleanNewAdvertisment, setPropertyPhotos, setPropertyPrimaryImage } from 'data/actions';

import { createReducer } from '@reduxjs/toolkit';

export interface IPropertyPhotosInitialState {
  photos: number[];
  primaryImage: number;
}

const propertyPhotosInitialState: IPropertyPhotosInitialState = {
  photos: [],
  primaryImage: -1,
};

export const propertyPhotosReducer = createReducer(propertyPhotosInitialState, {
  [setPropertyPhotos.type]: (state, action) => {
    return {
      ...state,
      photos: action.payload,
    };
  },
  [setPropertyPrimaryImage.type]: (state, action) => {
    return {
      ...state,
      primaryImage: action.payload,
    };
  },
  [cleanNewAdvertisment.type]: () => {
    return {
      ...propertyPhotosInitialState,
    };
  },
});
