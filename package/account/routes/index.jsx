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

const Registry = Loadable({
    loader: () => import('../containers/Registry'),
    loading: () => {
        return null;
    }
});

export const routes = (
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/registry" component={Registry}/>
            <Route path="/ding" component={Ding}/>
        </Switch>
    </HashRouter>
);
