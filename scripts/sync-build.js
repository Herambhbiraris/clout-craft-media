import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');
const rootAssetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
const docsAssetsDir = path.join(docsDir, 'assets');

console.log('[sync-build] Mirroring dist/ to root and docs/ for 100% reliable GitHub Pages hosting...');

// Ensure target directories exist
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
if (!fs.existsSync(docsAssetsDir)) fs.mkdirSync(docsAssetsDir, { recursive: true });
if (!fs.existsSync(rootAssetsDir)) fs.mkdirSync(rootAssetsDir, { recursive: true });

// Copy all files from dist to docs
fs.cpSync(distDir, docsDir, { recursive: true });
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(docsDir, '404.html'));
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');

// Copy dist/assets to root assets/
fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true });

// Copy dist/index.html to root index.html and root 404.html
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, '404.html'));
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

console.log('[sync-build] Successfully synchronized all production assets to root and docs!');