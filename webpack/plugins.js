const path = require('node:path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const PkgJsonPlugin = require('pkg.json-webpack-plugin');
const { ProgressPlugin, DefinePlugin } = require('webpack');

const Paths = require('./Paths');

module.exports = [
  new VueLoaderPlugin(),
  new HTMLWebpackPlugin({
    template: path.resolve(Paths.srcDir, 'index.html'),
    filename: './index.html',
    favicon: path.resolve(Paths.srcDir, 'assets/favicon.ico'),
  }),
  new PkgJsonPlugin(),
  new ProgressPlugin(),
  new DefinePlugin({
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  }),
];
