/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import App from '../App';
import Login from '../containers/Login';


export const routes = (
    <HashRouter>
        <Route path="/login" component={Login}/>
    </HashRouter>
);
