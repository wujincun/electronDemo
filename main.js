/**
 * Created by Administrator on 2017/4/1.
 */
'use strict';

const {app, ipcMain, globalShortcut,BrowserWindow} = require('electron');
//const BrowserWindow = electron.BrowserWindow;


var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        frame: false,
        resizable: false,
        height: 700,
        width: 368
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    globalShortcut.register('ctrl+shift+1', function () {
        mainWindow.webContents.send('global-shortcut', 0);
    });
    globalShortcut.register('ctrl+shift+2', function () {
        mainWindow.webContents.send('global-shortcut', 1);
    });
});

ipcMain.on('close-main-window', function () {
    app.quit();
});
