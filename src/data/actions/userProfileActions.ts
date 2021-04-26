import { UserProfileActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setCreateRequestAvatar = createAction<FormData>(UserProfileActionTypes.SET_CREATE_REQUEST_AVATAR);
export const setEditRequestAvatar = createAction<FormData>(UserProfileActionTypes.SET_EDIT_REQUEST_AVATAR);
