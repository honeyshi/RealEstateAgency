import { createAction } from '@reduxjs/toolkit';
import { PropertyPhotosActionTypes } from 'data/actionTypes';

export const setPropertyPhotos = createAction<number[]>(PropertyPhotosActionTypes.SET_PHOTOS);
export const setPropertyPrimaryImage = createAction<number>(PropertyPhotosActionTypes.SET_PRIMARY_IMAGE);
