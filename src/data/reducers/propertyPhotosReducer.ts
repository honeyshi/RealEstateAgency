import {
  cleanNewAdvertisment,
  setPrimaryImageName,
  setPropertyPhotos,
  setPropertyPrimaryImage,
  setUploadedFiles,
} from 'data/actions';

import { createReducer } from '@reduxjs/toolkit';

export interface IPropertyPhotosInitialState {
  photos: number[];
  primaryImage: number;
  previews: any[];
  primaryImageName: string;
}

const propertyPhotosInitialState: IPropertyPhotosInitialState = {
  photos: [],
  primaryImage: -1,
  previews: [],
  primaryImageName: '',
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
  [setUploadedFiles.type]: (state, action) => {
    return {
      ...state,
      previews: action.payload,
    };
  },
  [setPrimaryImageName.type]: (state, action) => {
    return {
      ...state,
      primaryImageName: action.payload,
    };
  },
  [cleanNewAdvertisment.type]: () => {
    return {
      ...propertyPhotosInitialState,
    };
  },
});
