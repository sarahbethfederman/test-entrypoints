const path = require('path');
const generateEntrypoints = require('@lendi-ui/asset-utils').generateEntrypoints;

const distPath = '../src/fancy-icons-compiled';
const compiledFolder = path.resolve(__dirname, distPath);
const outFolder = path.resolve(__dirname, '..');

generateEntrypoints('fancy-icon', compiledFolder, distPath, outFolder);
