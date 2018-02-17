import {app, BrowserWindow, ipcMain} from 'electron';

import _ from 'lodash';

let windowHandleArr = [];

export const ipcMsgPump = () => {

    app.on('browser-window-created', (event, window) => {
        windowHandleArr.push({name: window.getTitle(), handle: window});
    });

    ipcMain.on('open', (event, args) => {
        if (_.findIndex(windowHandleArr, {name: args[0]}) === -1) {
            const width = (args[0] === 'home') ? 320 : 900;
            const height = (args[0] === 'home') ? 690 : 600;
            const win = new BrowserWindow({
                minWidth: width,
                //maxWidth: width,
                minHeight: height,
                width: width,
                height: height,
                resizable: true,
                // autoHideMenuBar: true,
                // frame: false,
                show: false,
                title: args[0]
            });
            win.once('ready-to-show', () => win.show());
            win.loadURL('http://localhost:3000' + args[1]);
            win.webContents.openDevTools();
        }
    });

    ipcMain.on('minimize', (event, args) => {
        const index = _.findIndex(windowHandleArr, {name: args[0]});
        if (index === -1) return;
        windowHandleArr[index].handle.minimize();
    });

    ipcMain.on('close', (event, args) => {
        const index = _.findIndex(windowHandleArr, {name: args[0]});
        if (index === -1) return;
        if (args[0] === 'home' || (args[0] === 'login' && windowHandleArr.length === 1)) return app.exit();
        windowHandleArr[index].handle.close();
        _.pullAt(windowHandleArr, index);
    });

}
