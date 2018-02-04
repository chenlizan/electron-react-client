import React from 'react';
import Loadable from 'react-loadable';
import {HashRouter, Route, Switch} from 'react-router-dom';

// import Login from '../containers/Login';
import Ding from '../views/Ding'

function Loading() {
    return <div>Loading...</div>;
}

const Login = Loadable({
    loader: () => import('../containers/Login'),
    loading: () => {
        return null;
    }
});

const Registration = Loadable({
    loader: () => import('../containers/Registration'),
    loading: Loading
});

export const routes = (
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
            <Route path="/ding" component={Ding}/>
        </Switch>
    </HashRouter>
);
