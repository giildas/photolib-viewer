const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let api = require('./photolib_api')
let win

function createWindow (photos) {
  win = new BrowserWindow({width: 800, height: 600, show: false})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'html/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()
  win.on('ready-to-show', ()=>{
    console.log("rts")
    win.show()
    win.webContents.send("photos", photos)

  })
  
  win.on('closed', () => {
    win = null
  })

}

function start(){
  api.get_photos(photos => {
    createWindow(photos)
  })
}

app.on('ready', start)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


