const electron = window.require('electron');
const {ipcRenderer} = electron;

export const ipcMsgRenderer = () => {

    showWindow:(args) => {
        ipcRenderer.send('open', args);
    }
}
