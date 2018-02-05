const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let api = require('./photolib_api')
let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'html/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()
  
  win.on('closed', () => {
    win = null
  })

}

function start(){
  createWindow()
}

app.on('ready', start)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// making api callable from renderer process
exports.getPhotos = api.get_photos