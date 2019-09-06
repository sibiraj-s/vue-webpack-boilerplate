const path = require('path');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');
const devServer = require('./webpack/devServer');

const Paths = require('./webpack/Paths');

const WEBPACK_MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const isProduction = WEBPACK_MODE === 'production';

module.exports = {
  mode: WEBPACK_MODE,
  bail: isProduction,
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: path.resolve(Paths.srcDir, 'index.js'),
  module: {
    rules,
  },
  plugins,
  devServer,
};
