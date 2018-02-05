const fs = require ('fs')
const path = require ('path')
const CONFIG = require('./config.json')

/***

JSON structure 

[
  {
    foldername: "2017_12_01",
    photos : [
      "img1.jpg",
      "img2.jpg"
    ]
  },

] 

***/



module.exports = {
  get_photos(callback){
    let libfolder = CONFIG.lib
  
    // get folders list
    let folders = fs.readdir(libfolder, (err, folders) => {
      if (err) throw err

      let photos = folders.map(folder => {
        let f = path.resolve(libfolder, folder)
        
        // TODO: use async ?
        let photos = fs.readdirSync(f)
        return {
          folder_name: folder,
          photos: photos
        }
      })

      callback(photos)
    })
     
  },
}