"use strict";
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  /* {
    app: ['./src/app.js'],
    vendors: ['react', 'jquery']  
  }, */
  output: {
    filename: "./dist/bundle.js"
  },
  devServer: {
    contentBase: ".",
    host: "localhost",
    port: 9000
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
      } /*,
      { test: /jquery\/src\/selector\.js$/, loader: 'amd-define-factory-patcher-loader' },
      {
        test: /[\/\\]node_modules[\/\\]jquery[\/\\]index\.js$/,
        loader: "imports?define=>false"
      } */
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ],
  resolve: {
    alias: {
      // jquery: "jquery/src/jquery"
    }
  }
}