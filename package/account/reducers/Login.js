

/**
 * Created by chenlizan on 2017/7/22.
 */

import {handleActions} from "redux-actions";

const initState = {
    account: {
        loginInfo: {}
    }
};

const reducer = handleActions({
    SUBMIT_LOGIN_INFO: (state, action) => ({
        ...state, loginInfo: action.payload
    })
}, initState);

export default {initState, reducer};
