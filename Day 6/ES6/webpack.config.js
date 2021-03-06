var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     mode:'development',
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'app.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };