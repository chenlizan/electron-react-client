import {apiHttpRequest} from '../utils/httpRequest';

class Account {
    constructor() {
    }

    login(data) {
        const userInfo = {
            user: data.username,
            password: data.password
        };
        if (process.env.NODE_ENV == 'development')
            return {statusCode: 0, message: null, result: {token: 'token_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'}};
        else
            return apiHttpRequest('/userInfo/login', 'POST', userInfo);
    }

    resetPassword(data) {
        const userInfo = {
            user: data.username,
            password: data.password,
            verifyCode: data.verifyCode
        };
        if (process.env.NODE_ENV == 'development')
            return {statusCode: 0, message: null, result: [1]};
        else
            return apiHttpRequest('/userInfo/resetPassword', 'POST', userInfo);
    }
}

module.exports = new Account();
