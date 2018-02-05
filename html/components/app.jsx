import React from 'react'
import reactDOM from 'react-dom'
import createReactClass from 'create-react-class'
import Folder from './Folder.jsx'


let App = createReactClass({
  
  makeFolders(photos){
    return this.props.photos.map(folder => {
      return <Folder name={folder.name} photos={folder.photos} />
    })
  },

  render(){
    let photosjson = JSON.stringify(this.props.photos, undefined, 2)
    return (
      <div>
        <div>ICI APP REACT</div>
        {this.makeFolders()}
      </div>
    )
  }
})

function app(photos){
  
  reactDOM.render(<App photos={photos} />, document.getElementById("app") )
}

module.exports = app