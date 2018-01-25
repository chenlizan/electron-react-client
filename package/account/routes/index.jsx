/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import Loadable from 'react-loadable';
import {HashRouter, Route} from 'react-router-dom';

function Loading() {
    return <div>Loading...</div>;
}

const Login = Loadable({
    loader: () => import('../containers/Login'),
    loading: Loading
});

const Registration = Loadable({
    loader: () => import('../containers/Registration'),
    loading: Loading
});

export const routes = (
    <HashRouter>
        <div>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
        </div>
    </HashRouter>
);
