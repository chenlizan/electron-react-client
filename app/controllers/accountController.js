import promise from "bluebird";
import {login} from '../modules/accountModule';
import {electron_dispatch} from '../dispatchAction'

module.exports = {

    login: (data) => {
        return new promise((resolve, reject) => {
            return resolve(data);
        }).then(data => {
            return login(data)
        }).then(data => {
            return electron_dispatch({action: 'login', result: data, state: true});
        }).catch(err => {
            console.log(`error: ${JSON.stringify(err)}`);
        });
    }
}
