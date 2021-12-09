import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const rootDir = resolve(__dirname, '..');
export const srcDir = resolve(rootDir, 'src');
export const outDir = resolve(rootDir, 'build');
