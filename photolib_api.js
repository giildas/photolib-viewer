const fs = require ('fs')
const path = require ('path')
const CONFIG = require('./config.json')


let photos_json = {
  "2017_12_01" : [
    "img1",
    "img2"
  ]
} 



module.exports = {
  get_photos(callback){
    let libfolder = CONFIG.lib
  
    // get folders list
    let folders = fs.readdir(libfolder, (err, folders) => {
      if (err) throw err

      let allphotos = folders.map(folder => {
        let f = path.resolve(libfolder, folder)
        let photos = fs.readdirSync(f)
        let ob = {}
        ob[folder] = photos
        return ob 
      })  

      callback(allphotos)
    })
     
  },
}