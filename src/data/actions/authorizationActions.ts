import { createAction } from '@reduxjs/toolkit';
import { AuthorizationActionTypes } from 'data/actionTypes';

export const setAuthorizationToken = createAction<string>(AuthorizationActionTypes.SET_ACCESS_TOKEN);
