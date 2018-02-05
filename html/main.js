var {ipcRenderer} = require('electron');  

ipcRenderer.on('photos', (e, photos) => {  
  console.log("les photos sont arrivées")
  console.log(photos)
});
console.log("Renderer process")