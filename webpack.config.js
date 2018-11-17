var path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename:'./dist/bundle.js'
  },
  target:'web',
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  module: {
    rules: [{
      test:/.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader'
      }
    }]
  }
}
