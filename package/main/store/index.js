import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {forwardToMain, replayActionRenderer, getInitialStateRenderer} from 'electron-redux';
import Main from '../reducers/Main';

const initState = {
    // Login: Login.initState
};

const reducers = {
    // Login: Login.reducer
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
