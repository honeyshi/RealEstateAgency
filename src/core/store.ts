import { appReducer } from 'data/reducer';
import { createStore } from 'redux';

export const store = createStore(appReducer);

export interface StoreType extends ReturnType<typeof appReducer> {}
