// Copy hero images from Cursor assets to public/images
// Run from project root: node scripts/copy-hero-images.cjs

const fs = require('fs');
const path = require('path');

const ASSETS = path.join(process.env.USERPROFILE || '', '.cursor', 'projects', 'c-Users-OdaiAbuKhadir-Downloads-Fit-Band-3', 'assets');
const DEST = path.join(__dirname, '..', 'public', 'images');

// Map: substring in source filename -> destination filename
const MAP = [
  ['010118.070-fe524689', 'weight-feature.png'],
  ['010126.825-5a8f0dbe', 'battery-life.png'],
  ['010128.711-5a06bc4e', 'app-features.png'],
  ['010136.287-b1f4d041', 'ai-feature.png'],
  ['010140.672-ba73bc9a', 'health-app.png'],
  ['010158.963-b8465662', 'strap.png'],
  ['010121.694-9e97f896', 'design-feature.png'],
  ['010205.758-1b74b4a8', 'main-hero.png'],
  ['010124.192-8ccf8d8a', 'notifications.png'],
];

if (!fs.existsSync(ASSETS)) {
  console.error('Assets folder not found:', ASSETS);
  console.error('Please copy your 9 images manually to public/images with names:');
  MAP.forEach(([, name]) => console.error('  -', name));
  process.exit(1);
}

const files = fs.readdirSync(ASSETS).filter((f) => f.endsWith('.png'));
if (files.length === 0) {
  console.error('No PNG files in', ASSETS);
  process.exit(1);
}

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

let copied = 0;
for (const [substr, destName] of MAP) {
  const srcFile = files.find((f) => f.includes(substr));
  if (!srcFile) {
    console.warn('Not found:', substr);
    continue;
  }
  const srcPath = path.join(ASSETS, srcFile);
  const destPath = path.join(DEST, destName);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log('OK', destName);
    copied++;
  } catch (e) {
    console.error('Failed', destName, e.message);
  }
}

// smart-app.png = copy of app-features
const appFeatures = path.join(DEST, 'app-features.png');
if (fs.existsSync(appFeatures)) {
  fs.copyFileSync(appFeatures, path.join(DEST, 'smart-app.png'));
  console.log('OK smart-app.png');
  copied++;
}

console.log('Done. Copied', copied, 'files to', DEST);
