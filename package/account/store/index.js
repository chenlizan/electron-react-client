/**
 * Created by chenlizan on 2017/6/18.
 */

import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import Login from '../reducers/Login';

const initState = {
    Login: Login.initState
};

const reducers = {
    Login: Login.reducer
};

export const configureStore = (preloadState) => {
    const store = createStore(
        combineReducers(reducers),
        preloadState || initState,
    );
    return store
};
