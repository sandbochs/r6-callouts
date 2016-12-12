const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: ['babel-loader'],
      include: path.resolve(__dirname, 'client'),
      query: {
        presets: ['latest', 'react']
      }
    }]
  }
}
