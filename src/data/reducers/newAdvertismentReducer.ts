import { createReducer } from '@reduxjs/toolkit';
import { setActiveStep } from 'data/actions';

interface INewAdvertismentInitialState {
  activeStep: number;
}

const newAdvertismentInitialState: INewAdvertismentInitialState = {
  activeStep: 1,
};

export const newAdvertismentReducer = createReducer(newAdvertismentInitialState, {
  [setActiveStep.type]: (state, action) => {
    return {
      ...state,
      activeStep: action.payload,
    };
  },
});
