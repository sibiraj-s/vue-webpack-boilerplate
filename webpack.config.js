const path = require('node:path');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');
const devServer = require('./webpack/devServer');
const optimization = require('./webpack/optimization');

const Paths = require('./webpack/Paths');
const pkgJson = require('./package.json');

const WEBPACK_MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const isProduction = WEBPACK_MODE === 'production';

const config = {
  mode: WEBPACK_MODE,
  bail: isProduction,
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: path.resolve(Paths.srcDir, 'index.js'),
  output: {
    clean: true,
    filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    path: Paths.outDir,
    publicPath: '/',
  },
  module: {
    rules,
  },
  plugins,
  optimization,
  devServer,
};

// changes required to deploy in Github Pages
if (process.env.NODE_ENV === 'gh-pages') {
  config.output.publicPath = `/${pkgJson.name}/`;
}

module.exports = config;
