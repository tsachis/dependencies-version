const path = require('path');

const include = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'dependenciesVersion',
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', include}
    ]
  }
}
