import {app, BrowserWindow, ipcMain} from 'electron';
import _ from 'lodash';

let windowHandleArr = [];

app.on('browser-window-created', (event, window) => {
    windowHandleArr.push({name: window.getTitle(), handle: window});
});

export const ipcMsgMain = () => {

    ipcMain.on('showWindow', (event, args) => {
        if (_.findIndex(windowHandleArr, {name: args[0]}) === -1) {
            const width = (args[0] === 'home') ? 320 : 979;
            const height = (args[0] === 'home') ? 690 : 719;
            if (process.env.NODE_ENV == 'production') {
                const win = new BrowserWindow({
                    minWidth: width, minHeight: height, width: width, height: height,
                    autoHideMenuBar: true, frame: false, resizable: true, show: false, title: args[0]
                });
                win.once('ready-to-show', () => win.show());
                win.loadURL(`file://${__dirname}/..${args[1]}`);
            } else {
                const win = new BrowserWindow({
                    minWidth: width, minHeight: height, width: width, height: height,
                    autoHideMenuBar: false, frame: true, resizable: true, show: false, title: args[0]
                });
                win.once('ready-to-show', () => win.show());
                win.loadURL('http://localhost:3000' + args[1]);
                win.webContents.openDevTools();
            }
        }
    });

    ipcMain.on('minWindow', (event, args) => {
        const index = _.findIndex(windowHandleArr, {name: args[0]});
        if (index === -1) return;
        windowHandleArr[index].handle.minimize();
    });

    ipcMain.on('closeWindow', (event, args) => {
        const index = _.findIndex(windowHandleArr, {name: args[0]});
        if (index === -1) return;
        if (args[0] === 'home' || (args[0] === 'account' && windowHandleArr.length === 1)) return app.exit();
        windowHandleArr[index].handle.close();
        _.pullAt(windowHandleArr, index);
    });

};
