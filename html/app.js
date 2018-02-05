/****** RENDERER PROCESS **********/

var {ipcRenderer, remote} = require('electron');  
var app = require('./components/app.jsx') 

var main = remote.require("./mainprocess.js");


main.getPhotos(photos => {
  app(photos)
})