/**
 * Created by chenlizan on 2017/9/20.
 */

import {applyMiddleware, createStore, combineReducers} from 'redux';
import {forwardToRenderer, triggerAlias, replayActionMain} from 'electron-redux';

const wrapRouter = require('./utils/wrapRouter');

export const initState = {wrapRouter: wrapRouter.initState};

const reducers = {wrapRouter: wrapRouter.reducer};

export const configureStore = () => {
    const store = createStore(
        combineReducers(reducers),
        initState,
        applyMiddleware(triggerAlias, forwardToRenderer)
    );
    replayActionMain(store);
    return store;
};
