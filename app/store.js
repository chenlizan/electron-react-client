/**
 * Created by chenlizan on 2017/9/20.
 */

import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {forwardToMain, forwardToRenderer, triggerAlias, replayActionMain, replayActionRenderer} from 'electron-redux';
import thunk from 'redux-thunk';

export const initState = {
};

const reducers = {
};

export const configureStore = () => {
    const mainMiddleware = [triggerAlias, forwardToRenderer, thunk];
    const rendererMiddleware = [forwardToMain, thunk];
    const main = (typeof window !== 'object');
    const store = createStore(
        combineReducers(reducers),
        initState,
        applyMiddleware(...main ? [...mainMiddleware] : [...rendererMiddleware])
    );
    main ? replayActionMain(store) : replayActionRenderer(store);
    return store;
};