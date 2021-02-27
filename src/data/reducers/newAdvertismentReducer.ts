import { createReducer } from '@reduxjs/toolkit';
import { cleanNewAdvertisment, setActiveStep, setPropertyType, setValidatedForm, setWrongSteps } from 'data/actions';

interface INewAdvertismentInitialState {
  activeStep: number;
  propertyType: string;
  wrongSteps: number[];
  validated: boolean;
}

const newAdvertismentInitialState: INewAdvertismentInitialState = {
  activeStep: 1,
  propertyType: 'flat-type',
  wrongSteps: [],
  validated: false,
};

export const newAdvertismentReducer = createReducer(newAdvertismentInitialState, {
  [setActiveStep.type]: (state, action) => {
    return {
      ...state,
      activeStep: action.payload,
    };
  },
  [cleanNewAdvertisment.type]: () => {
    return {
      ...newAdvertismentInitialState,
    };
  },
  [setPropertyType.type]: (state, action) => {
    return {
      ...state,
      propertyType: action.payload,
    };
  },
  [setWrongSteps.type]: (state, action) => {
    return {
      ...state,
      wrongSteps: action.payload,
    };
  },
  [setValidatedForm.type]: (state, action) => {
    return {
      ...state,
      validated: action.payload,
    };
  },
});
