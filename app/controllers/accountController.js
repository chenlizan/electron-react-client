import promise from "bluebird";
import accountModule from '../modules/accountModule';
import dataSyncModule from '../modules/dataSyncModule';
import {electron_dispatch} from '../dispatchAction'

module.exports = {

    login: (data) => {
        return new promise((resolve, reject) => {
            return resolve(data);
        }).then(data => {
            return accountModule.login(data)
        }).then(data => {
            return electron_dispatch({action: 'login', data: data, state: true});
        }).then(() => {
            return dataSyncModule.syncFriend();
        }).catch(err => {
            console.log(`error: ${JSON.stringify(err)}`);
            return electron_dispatch({action: 'login', data: err, state: false});
        });
    },

    resetPassword: (data) => {
        return new promise((resolve, reject) => {
            return resolve(data);
        }).then(data => {
            return accountModule.resetPassword(data)
        }).then(data => {
            return electron_dispatch({action: 'resetPassword', data: data, state: true});
        }).catch(err => {
            console.log(`error: ${JSON.stringify(err)}`);
            return electron_dispatch({action: 'resetPassword', data: err, state: false});
        });
    }
};
