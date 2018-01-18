/**
 * Created by chenlizan on 2018/1/14.
 */

import {handleActions} from 'redux-actions';

export const initState = {};

export const reducer = handleActions({
        SUBMIT_LOGIN_INFO: (state, action) => {
            console.log(action);
            return;
        },
        SUBMIT_REGISTER_INFO: (state, action) => {
            console.log(action);
            return;
        }
    }, initState
);
