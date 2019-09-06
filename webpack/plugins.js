const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const PkgJsonPlugin = require('pkg.json-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Paths = require('./Paths');

module.exports = [
  new VueLoaderPlugin(),
  new HTMLWebpackPlugin({
    template: path.resolve(Paths.srcDir, 'index.html'),
    filename: './index.html',
    favicon: path.resolve(Paths.srcDir, 'assets/favicon.ico'),
  }),
  new PkgJsonPlugin(),
  new webpack.ProgressPlugin(),
  new CleanWebpackPlugin(),
];
