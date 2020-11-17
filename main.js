const { app, BrowserWindow, Menu } = require('electron')

Menu.setApplicationMenu(null);

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 960,
    backgroundColor: '#000',
    webPreferences: {
      nodeIntegration: false,
        plugins: false
    }
  })
    win.webContents.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");
    win.loadURL('https://www.messenger.com/')  
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
