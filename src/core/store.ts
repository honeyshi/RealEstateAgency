import { createStore } from 'redux';
import axios from 'axios';
import { appReducer } from 'data/reducer';
import { setAuthorizationToken } from 'data/actions';

export const store = createStore(appReducer);

const authInfo = localStorage.getItem('authInfo');
if (authInfo != null) store.dispatch(setAuthorizationToken(JSON.parse(authInfo).accessToken));

axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().authorization.accessToken}`;

export interface StoreType extends ReturnType<typeof appReducer> {}
