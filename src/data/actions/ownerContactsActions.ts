import { OwnerContactsActionTypes } from 'data/actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setRentPayment = createAction<string>(OwnerContactsActionTypes.SET_RENT_PAYMENT);
export const setRentPaymentRule = createAction<string>(OwnerContactsActionTypes.SET_RENT_PAYMENT_RULE);
export const setWithDeposit = createAction<boolean>(OwnerContactsActionTypes.SET_WITH_DEPOSIT);
export const setRentDeposit = createAction<string>(OwnerContactsActionTypes.SET_RENT_DEPOSIT);
export const setTelephoneNumber = createAction<string>(OwnerContactsActionTypes.SET_TELEPHONE_NUMBER);
