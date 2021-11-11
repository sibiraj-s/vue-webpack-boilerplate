const path = require('node:path');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');
const devServer = require('./webpack/devServer');
const optimization = require('./webpack/optimization');

const Paths = require('./webpack/Paths');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  bail: isProduction,
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: path.resolve(Paths.srcDir, 'index.js'),
  output: {
    clean: true,
    filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    path: Paths.outDir,
    publicPath: 'auto',
  },
  module: {
    rules,
  },
  plugins,
  optimization,
  devServer,
};

module.exports = config;
