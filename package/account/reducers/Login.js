/**
 * Created by chenlizan on 2017/7/22.
 */

const initState = {
    account: {}
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'SAVE_LOGIN_INFO':
            return {...state, account: action.account};
        default:
            return state;
    }
};

export default {initState, reducer};