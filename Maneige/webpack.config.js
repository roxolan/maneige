"use strict";
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

require('es6-promise').polyfill()

module.exports = {
  // context: __dirname + "/src",

  entry: path.resolve(__dirname, 'src/app.js'),
  // entry: path.resolve(__dirname, 'src/components/primus.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
            path.resolve(__dirname, 'src/components')
        ],
        exclude: node_modules,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /jquery\/src\/selector\.js$/, 
        loader: 'amd-define-factory-patcher-loader' 
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
  ] /*,
  
  externals: {
      "jquery": "jQuery"
  } */
}