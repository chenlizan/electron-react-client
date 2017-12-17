import {handleActions} from 'redux-actions';

const initState = {
    forgetPhone: '',
    registerPhone: '',
    loginInfo: {},
    registerInfo: {},
    newPassword: {}
};

const reducer = handleActions({
    SAVE_FORGET_PHONE: (state, action) => ({
        ...state, forgetPhone: action.payload
    }),
    SAVE_REGISTER_PHONE: (state, action) => ({
        ...state, registerPhone: action.payload
    }),
    SUBMIT_LOGIN_INFO: (state, action) => ({
        ...state, loginInfo: action.payload
    }),
    SUBMIT_REGISTER_INFO: (state, action) => ({
        ...state, registerInfo: action.payload
    }),
    SUBMIT_CHANGE_PASSWORD: (state, action) => ({
        ...state, newPassword: action.payload
    })
}, initState);

export default {initState, reducer};