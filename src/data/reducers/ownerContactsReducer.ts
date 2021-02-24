import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'data/actions';

interface IOwnerContactsInitialState {
  rentPayment: string;
  rentPaymentRules: string[];
  rentDeposit: string;
  ownerName: string;
  telephoneNumber: string;
}

const ownerContactsInitialState: IOwnerContactsInitialState = {
  rentPayment: '',
  rentPaymentRules: [],
  rentDeposit: '',
  ownerName: '',
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
  [Action.setOwnerName.type]: (state, action) => {
    return {
      ...state,
      ownerName: action.payload,
    };
  },
  [Action.setTelephoneNumber.type]: (state, action) => {
    return {
      ...state,
      telephoneNumber: action.payload,
    };
  },
});
