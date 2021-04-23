import { createReducer } from '@reduxjs/toolkit';
import { setCreateRequestAvatar } from 'data/actions';

export interface IUserProfileInitialState {
  createRequestAvatar: FormData;
}

const userProfileInitialState: IUserProfileInitialState = {
  createRequestAvatar: new FormData(),
};

export const userProfileReducer = createReducer(userProfileInitialState, {
  [setCreateRequestAvatar.type]: (state, action) => {
    return {
      ...state,
      createRequestAvatar: action.payload,
    };
  },
});
