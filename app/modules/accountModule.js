import promise from "bluebird";

class Account {
    constructor() {
    }

    login(data) {
        return new promise((resolve, reject) => {
            return setTimeout(function () {
                console.log(`class: ${JSON.stringify(data)}`);
                return resolve('login successful');
            }, 3000);
        });
    }
}

module.exports = new Account();
