import {apiHttpRequest} from '../utils/httpRequest'

class Account {
    constructor() {
    }

    login(data) {
        const userInfo = {
            user: data.username,
            password: data.password
        };
        if (process.env.NODE_ENV == 'production')
            return apiHttpRequest('/userInfo/login', 'POST', userInfo);
        else
            return {statusCode: 0, message: null, result: {token: 'token_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'}}
    }
}

module.exports = new Account();
