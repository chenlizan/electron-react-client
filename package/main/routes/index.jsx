import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Loading () {
    return <div>Loading</div>;
}
const MainFrame = Loadable ({
    loader: () => import('../containers/MainFrame'),
    loading: () => {
        return null;
    }
})

export const routes = (
    <HashRouter>
        <Switch>
            <Route path="/mainFrame" component={MainFrame} />
        </Switch>
    </HashRouter>
)
