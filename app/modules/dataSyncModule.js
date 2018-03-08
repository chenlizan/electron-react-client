import {apiHttpRequest} from '../utils/httpRequest';
import orm from '../models';

class DateSync {
    constructor() {
        this.friend = orm.model('friend');
    }

    /**
     * 同步联系人
     * @returns {*|PromiseLike<T>|Promise<T>}
     */
    syncFriend() {
        const _this = this;
        return apiHttpRequest('/friend/getAllFriend')
            .then(data => {
                const friendArr = [];
                data.result.forEach((item) => {
                    friendArr.push({
                        userId: item.userId,
                        friendId: item.friendId,
                        user: item.userInfo.user,
                        phone: item.userInfo.phone,
                        nickName: item.userInfo.nickName,
                        note: item.note
                    });
                });
                return friendArr;
            }).then(friendArr => {
                return _this.friend.destroy({where: {}}).then(data => {
                    return friendArr;
                });
            }).then(friendArr => {
                return _this.friend.bulkCreate(friendArr);
            });
    }
}

module.exports = new DateSync();
