const path = require('path');
module.exports = {
  entry: './html/main.js',
  output: {
    path: path.resolve('html'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}