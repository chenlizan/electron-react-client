/**
 * Created by chenlizan on 2017/9/20.
 */


import {app, BrowserWindow} from 'electron';
import path from 'path';
import serve from 'serve';
import {configureStore} from './store';
// import {router} from './routes';
import {ipcMsgPump} from "./ipcMsg";

app.commandLine.appendSwitch('disable-http-cache');

const store = configureStore();
ipcMsgPump();
// router(store);

const server = serve(path.join(__dirname, 'dist'), {
    port: 8080,
    single: true
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let loginWindow;

function createLoginWindow() {
    // Create the browser window.

    loginWindow = new BrowserWindow({
        width: 280, height: 450, minHeight: 450, maxWidth: 280, minWidth: 280, title: 'login',
        autoHideMenuBar: true, frame: false, resizable: true, show: false
    });

    loginWindow.once('ready-to-show', () => loginWindow.show());

    // and load the index.html of the app.
    loginWindow.loadURL('http://localhost:8080/account/login');

    // Open the DevTools.
    // loginWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    loginWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        loginWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createLoginWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (loginWindow === null) {
        createLoginWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.