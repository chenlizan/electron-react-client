import orm from '../models';

class Contact {
    constructor() {
        this.friend = orm.model('friend');
    }

    getAllFriend() {
        // const userInfo = {userId: data.id};
        return this.friend.findAll();

    }
}

module.exports = new Contact();
