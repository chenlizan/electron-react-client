const {remote} = window.require('electron');
const accountController = remote.app.API.accountController;

export const login = (data) => {
    accountController.login(data);
};
