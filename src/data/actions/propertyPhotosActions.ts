import { PropertyPhotosActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setPropertyPhotos = createAction<number[]>(PropertyPhotosActionTypes.SET_PHOTOS);
export const setPropertyPrimaryImage = createAction<number>(PropertyPhotosActionTypes.SET_PRIMARY_IMAGE);
export const setUploadedFiles = createAction<any[]>(PropertyPhotosActionTypes.SET_UPLOADED_FILES);
export const setPrimaryImageName = createAction<string>(PropertyPhotosActionTypes.SET_PRIMARY_IMAGE_NAME);
