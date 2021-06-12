const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(rootDir, 'src');
const outDir = path.resolve(rootDir, 'build');

module.exports = {
  rootDir,
  srcDir,
  outDir,
};
