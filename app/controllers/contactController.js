import promise from "bluebird";
import contactModule from '../modules/contactModule';

module.exports = {

    getAllFriend: () => {
        return contactModule.getAllFriend()
            .then(data => {
                return data;
            })
            .catch(err => {
                console.log(`error: ${JSON.stringify(err)}`);
            });
    }

}
;
