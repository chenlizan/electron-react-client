import {handleActions} from 'redux-actions';

export const initState = {};

export const reducer = handleActions({
        SUBMIT_LOGIN_INFO: (state, action) => {
            console.log(`action: ${JSON.stringify(action)}`);
            return state;
        }
    }, initState
);
