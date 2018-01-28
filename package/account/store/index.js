/**
 * Created by chenlizan on 2017/6/18.
 */

import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {forwardToMain, replayActionRenderer, getInitialStateRenderer} from 'electron-redux';
import Login from '../reducers/Login';

const initState = {
    Login: Login.initState
};

const reducers = {
    Login: Login.reducer
};

export const configureStore = () => {
    const store = createStore(
        combineReducers(reducers),
        initState,
        applyMiddleware(
            forwardToMain
        )
    );
    replayActionRenderer(store);
    return store
};
