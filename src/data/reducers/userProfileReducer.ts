import { setCreateRequestAvatar, setEditRequestAvatar } from 'data/actions';

import { createReducer } from '@reduxjs/toolkit';

export interface IUserProfileInitialState {
  createRequestAvatar: FormData;
  editRequestAvatar: FormData;
}

const userProfileInitialState: IUserProfileInitialState = {
  createRequestAvatar: new FormData(),
  editRequestAvatar: new FormData(),
};

export const userProfileReducer = createReducer(userProfileInitialState, {
  [setCreateRequestAvatar.type]: (state, action) => {
    return {
      ...state,
      createRequestAvatar: action.payload,
    };
  },
  [setEditRequestAvatar.type]: (state, action) => {
    return {
      ...state,
      editRequestAvatar: action.payload,
    };
  },
});
