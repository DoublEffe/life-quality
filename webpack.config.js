const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/layout.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}