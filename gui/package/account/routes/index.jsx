import React from 'react';
import Loadable from 'react-loadable';
import {HashRouter, Route, Switch} from 'react-router-dom';

const Login = Loadable({
    loader: () => import('../containers/Login'),
    loading: () => {
        return null;
    }
});

export const routes = (
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    </HashRouter>
);
