import React from 'react'
import createReactClass from 'create-react-class'

let Folder = createReactClass({
  render(){

    let { name, photos} = this.props
    console.log("name", name)    
    return (
      <div className="folder">
        <h3>{name}</h3>
      </div>
    )
  }
})

module.exports = Folder
