import {handleActions} from "redux-actions";

const initState = {
    account: {
        loginInfo: {}
    }
};

const reducer = handleActions({
    ELECTRON_DISPATCH: (state, action) => ({
        ...state, electron: action.payload
    })
}, initState);

export default {initState, reducer};
