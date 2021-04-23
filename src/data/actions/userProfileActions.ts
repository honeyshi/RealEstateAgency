import { UserProfileActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setCreateRequestAvatar = createAction<FormData>(UserProfileActionTypes.SET_CREATE_REQUEST_AVATAR);
