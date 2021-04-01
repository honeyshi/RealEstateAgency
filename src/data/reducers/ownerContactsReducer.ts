import * as Action from 'data/actions';

import { createReducer } from '@reduxjs/toolkit';

export interface IOwnerContactsInitialState {
  rentPayment: string;
  rentPaymentRule: string;
  withDeposit: boolean;
  rentDeposit: string;
  telephoneNumber: string;
}

const ownerContactsInitialState: IOwnerContactsInitialState = {
  rentPayment: '',
  rentPaymentRule: '',
  withDeposit: false,
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
  [Action.setRentPaymentRule.type]: (state, action) => {
    return {
      ...state,
      rentPaymentRule: action.payload,
    };
  },
  [Action.setWithDeposit.type]: (state, action) => {
    return {
      ...state,
      withDeposit: action.payload,
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
