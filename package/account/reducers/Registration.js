/**
 * Created by chenlizan on 2018/1/25.
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
