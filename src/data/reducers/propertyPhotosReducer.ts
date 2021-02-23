import { createReducer } from '@reduxjs/toolkit';
import { setVideoLink } from 'data/actions';

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
});
