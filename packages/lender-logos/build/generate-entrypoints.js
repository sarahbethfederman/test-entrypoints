const path = require('path');
const generateEntrypoints = require('@lendi-ui/asset-utils').generateEntrypoints;

const distPath = '../src/lender-logos-compiled';
const compiledFolder = path.resolve(__dirname, distPath);
const outFolder = path.resolve(__dirname, '..');

generateEntrypoints('lender-logos', compiledFolder, distPath, outFolder);
