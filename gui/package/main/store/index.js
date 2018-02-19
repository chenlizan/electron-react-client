import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {forwardToMain, replayActionRenderer, getInitialStateRenderer} from 'electron-redux';
import Main from '../reducers/Main';

const initState = {
    Main: Main.initState
};

const reducers = {
    Main: Main.reducer
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
