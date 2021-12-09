import path from 'node:path';

import rules from './webpack/rules.js';
import plugins from './webpack/plugins.js';
import devServer from './webpack/devServer.js';
import optimization from './webpack/optimization.js';
import { srcDir, outDir } from './webpack/Paths.js';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  bail: isProduction,
  entry: path.resolve(srcDir, 'index.js'),
  output: {
    clean: true,
    filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    path: outDir,
    publicPath: 'auto',
  },
  module: {
    rules,
  },
  plugins,
  optimization,
  devServer,
};

export default config;
