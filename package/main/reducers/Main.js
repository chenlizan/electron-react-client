import {handleActions} from "redux-actions";

const initState = {
    
};

const reducer = handleActions({
    // ELECTRON_DISPATCH: (state, action) => ({
    //     ...state, electron: action.payload
    // })
}, initState);

export default {initState, reducer};
