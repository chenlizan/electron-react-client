

import {handleActions} from 'redux-actions';

export const initState = {};

export const reducer = handleActions({
        ELECTRON_REQUEST: (state, action) => {
            console.log(`action: ${JSON.stringify(action)}`);
            return;
        }
    }, initState
);
