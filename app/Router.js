/**
 * Created by chenlizan on 2017/9/28.
 */

import {is} from 'immutable';

export class Router {
    constructor(store, initState) {
        this._store = store;
        this._initState = initState;
    }

    route(path) {
        const {_store, _initState} = this;
        const route = new Route(_store, _initState);
        const key = path.split('/').slice(1);
        route.diff = !is(_store.getIn(key), _initState.getIn(key));
        return route;
    }
}

class Route {
    constructor(store, initState) {
        this.diff = true;
        this.store = store;
        this.initState = initState;
    }

    next(handle) {
        if (this.diff) {
            handle(this.store, this.initState);
        }
    }

    exec(handle) {
        if (this.diff) {
            handle;
        }
    }
}