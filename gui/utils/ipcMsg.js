const electron = window.require('electron');
const {ipcRenderer} = electron;

export const ipcMsgRenderer = {
    showWindow: (args) => {
        ipcRenderer.send('showWindow', args);
    },

    minWindow: (args) => {
        ipcRenderer.send('minWindow', args);
    },

    closeWindow: (args) => {
        ipcRenderer.send('closeWindow', args);
    }
};

export const windowID = {
    account: ['account', '/account.html#/login'],
    main: ['main', '/main.html#/mainFrame']
}
