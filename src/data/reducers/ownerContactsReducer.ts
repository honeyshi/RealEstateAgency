import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

export interface IOwnerContactsInitialState {
  rentPayment: string;
  rentPaymentRules: string[];
  rentDeposit: string;
  telephoneNumber: string;
}

const ownerContactsInitialState: IOwnerContactsInitialState = {
  rentPayment: '',
  rentPaymentRules: [],
  rentDeposit: '',
  telephoneNumber: '',
};

export const ownerContactsReducer = createReducer(ownerContactsInitialState, {
  [Action.setRentPayment.type]: (state, action) => {
    return {
      ...state,
      rentPayment: action.payload,
    };
  },
  [Action.setRentPaymentRules.type]: (state, action) => {
    return {
      ...state,
      rentPaymentRules: action.payload,
    };
  },
  [Action.setRentDeposit.type]: (state, action) => {
    return {
      ...state,
      rentDeposit: action.payload,
    };
  },
  [Action.setTelephoneNumber.type]: (state, action) => {
    return {
      ...state,
      telephoneNumber: action.payload,
    };
  },
  [Action.cleanNewAdvertisment.type]: () => {
    return {
      ...ownerContactsInitialState,
    };
  },
});
