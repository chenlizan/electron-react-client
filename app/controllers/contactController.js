import promise from "bluebird";
import contactModule from '../modules/contactModule';

module.exports = {

    getAllFriend: () => {
        return new promise((resolve, reject) => {
            return resolve('true');
        }).then(data => {
            return contactModule.getAllFriend(data)
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(`error: ${JSON.stringify(err)}`);
        });
    }

};
