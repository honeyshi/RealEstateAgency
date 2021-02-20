import { createStore } from 'redux';
import { appReducer } from 'data/reducer';

export const store = createStore(appReducer);

export interface StoreType extends ReturnType<typeof appReducer> {}
