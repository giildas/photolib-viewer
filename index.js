const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require ('fs')

const CONFIG = require('./config.json')

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


  // load config
  let libfolder = CONFIG.lib
  
  // get folders list
  let folders = fs.readdirSync(libfolder)
  console.log(folders)
  exports.folders = folders
  // print them in html window
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

