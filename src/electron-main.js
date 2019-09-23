const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('build/index.html')
    //win.webContents.openDevTools();
}

app.on('ready', createWindow)