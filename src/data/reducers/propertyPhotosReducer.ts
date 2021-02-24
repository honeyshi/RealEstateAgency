import { createReducer } from '@reduxjs/toolkit';
import { cleanNewAdvertisment, setVideoLink } from 'data/actions';

interface IPropertyPhotosInitialState {
  videoLink: string;
}

const propertyPhotosInitialState: IPropertyPhotosInitialState = {
  videoLink: '',
};

export const propertyPhotosReducer = createReducer(propertyPhotosInitialState, {
  [setVideoLink.type]: (state, action) => {
    return {
      ...state,
      videoLink: action.payload,
    };
  },
  [cleanNewAdvertisment.type]: () => {
    return {
      ...propertyPhotosInitialState,
    };
  },
});
