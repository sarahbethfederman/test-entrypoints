const path = require('path');
const generateEntrypoints = require('@lendi-ui/asset-utils').generateEntrypoints;

const compiledFolder = path.resolve(__dirname, '../src/lender-logos-compiled');
const outFolder = path.resolve(__dirname, '..');

generateEntrypoints(compiledFolder, outFolder);
