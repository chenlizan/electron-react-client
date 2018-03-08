import promise from "bluebird";
import contactModule from '../modules/contactModule';

module.exports = {

    getAllFriend: () => {
        return contactModule.getAllFriend()
            .catch(err => {
                console.log(`error: ${JSON.stringify(err)}`);
            });
    }

};
