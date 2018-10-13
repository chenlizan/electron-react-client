import {app, BrowserWindow, Menu, shell, Tray} from 'electron';
import {ipcMsgMain} from './ipcMsg';
import controllers from './controllers';

controllers(app);
ipcMsgMain();

app.commandLine.appendSwitch('disable-http-cache');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let accountWindow;
let trayIcon;

function createLoginWindow() {
    if (process.env.NODE_ENV == 'production') {
        // Create the browser window.
        accountWindow = new BrowserWindow({
            width: 490, height: 382, title: 'account',
            autoHideMenuBar: true, frame: false, resizable: false, show: false ,transparent :true
        });
        // and load the account.html of the app.
        accountWindow.loadURL(`file://${__dirname}/../account.html#/login`);
    } else {
        accountWindow = new BrowserWindow({
            title: 'account', resizable: false, show: false,transparent :true,
        });
        accountWindow.loadURL('http://localhost:3000/account.html#/login');
        // Open the DevTools.
        // accountWindow.webContents.openDevTools();
    }

    accountWindow.once('ready-to-show', () => accountWindow.show());

    // Emitted when the window is closed.
    accountWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        accountWindow = null;
    });

    const contextMenu = Menu.buildFromTemplate([
        {
            label: '关于', click: () => {
                shell.openExternal('https://github.com/chenlizan/electron-react-client')
            }
        },
        {label: '退出', role: 'quit'}
    ]);

    trayIcon = new Tray(__dirname + '/resources/appIcon.png');
    trayIcon.setToolTip('PP');
    trayIcon.setContextMenu(contextMenu);
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
    if (accountWindow === null) {
        createLoginWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
