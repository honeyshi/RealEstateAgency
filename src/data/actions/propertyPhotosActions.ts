import { createAction } from '@reduxjs/toolkit';
import { PropertyPhotosActionTypes } from 'data/actionTypes';

export const setVideoLink = createAction<string>(PropertyPhotosActionTypes.SET_VIDEO_LINK);
