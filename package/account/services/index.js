const {remote} = window.require('electron');

const accountController = remote.require('./app/controllers/accountController');

export const login = (data) =>{
    accountController.login(data);
}
