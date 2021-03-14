import { createAction } from '@reduxjs/toolkit';
import { OwnerContactsActionTypes } from 'data/actionTypes';

export const setRentPayment = createAction<string>(OwnerContactsActionTypes.SET_RENT_PAYMENT);
export const setRentPaymentRules = createAction<string[]>(OwnerContactsActionTypes.SET_RENT_PAYMENT_RULES);
export const setRentDeposit = createAction<string>(OwnerContactsActionTypes.SET_RENT_DEPOSIT);
export const setTelephoneNumber = createAction<string>(OwnerContactsActionTypes.SET_TELEPHONE_NUMBER);
