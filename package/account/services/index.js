const {remote} = window.require('electron');

// const accountController = remote.require('./app/controllers/accountController');
const accountController = remote.app.API.accountController;

export const login = (data) =>{
    accountController.login(data);
}
