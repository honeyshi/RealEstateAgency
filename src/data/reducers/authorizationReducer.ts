import { createReducer } from '@reduxjs/toolkit';
import { setAuthorizationToken } from 'data/actions';

interface IAuthorizationInitialState {
  accessToken: string;
}

const authorizationInitialState: IAuthorizationInitialState = {
  accessToken: '',
};

export const authorizationReducer = createReducer(authorizationInitialState, {
  [setAuthorizationToken.type]: (state, action) => {
    return {
      ...state,
      accessToken: action.payload,
    };
  },
});
