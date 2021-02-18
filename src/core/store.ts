import { createStore } from 'redux';
import { rootReducer } from 'data/reducer';

export const store = createStore(rootReducer);

export interface StoreType extends ReturnType<typeof rootReducer> {}
