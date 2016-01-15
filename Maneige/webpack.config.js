"use strict";
var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill()

module.exports = {
  // context: __dirname + "/src",
  // entry: "./app",

  entry: path.resolve(__dirname, 'src/app.js'),


  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
          NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}