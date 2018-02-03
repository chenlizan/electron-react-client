import {applyMiddleware, createStore, combineReducers} from 'redux';
import {forwardToRenderer, triggerAlias, replayActionMain} from 'electron-redux';

const reducer = require('./reducer');

export const initState = {electron: reducer.initState};

const reducers = {electron: reducer.reducer};

export const configureStore = () => {
    const store = createStore(
        combineReducers(reducers),
        initState,
        applyMiddleware(triggerAlias, forwardToRenderer)
    );
    replayActionMain(store);
    return store;
};
