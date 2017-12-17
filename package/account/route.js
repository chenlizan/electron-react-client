

import {EventEmitter} from 'events';
import {fromJS} from 'immutable';

import accountRouter from './accountRouter';

import {electron_dispatch_action} from './action';
import {initState} from '../../app/store';

import {Router} from '../../app/Router';

export const notify = Object.create(EventEmitter.prototype);

export const router = (store) => {
    let _initState = fromJS(initState);

    store.subscribe(() => {

        const _store = fromJS(store.getState());

        const storeRouter = new Router(_store, _initState);

        storeRouter.route('/Account').next(accountRouter);

        _initState = _store;

    });

    notify.on('store', (data) => {
        const _store = fromJS(store.getState());
        _initState = _store;
        store.dispatch(electron_dispatch_action(data));
    });
};