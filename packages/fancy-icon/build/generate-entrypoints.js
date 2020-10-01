const path = require('path');
const generateEntrypoints = require('@lendi-ui/asset-utils').generateEntrypoints;

const compiledFolder = path.resolve(__dirname, '../src/fancy-icons-compiled');
const distPath = '../src/fancy-icons-compiled';
const outFolder = path.resolve(__dirname, '..');

generateEntrypoints('fancy-icon', compiledFolder, distPath, outFolder);
