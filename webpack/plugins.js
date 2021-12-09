import path from 'node:path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import PkgJsonPlugin from 'pkg.json-webpack-plugin';
import webpack from 'webpack';

import { srcDir } from './Paths.js';

const { ProgressPlugin, DefinePlugin } = webpack;

const plugins = [
  new VueLoaderPlugin(),
  new HTMLWebpackPlugin({
    template: path.resolve(srcDir, 'index.html'),
    filename: './index.html',
    favicon: path.resolve(srcDir, 'assets/favicon.ico'),
  }),
  new PkgJsonPlugin(),
  new ProgressPlugin(),
  new DefinePlugin({
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  }),
];

export default plugins;
