const util = require('./util');
const disclaimer = require('./disclaimer.template');

const exportFile = (files) => `${disclaimer}
export interface SvgProps {
  fill: string;
}

${files
  .map((file) => `export { ${util.pascalCase(file)} } from './icons-compiled/${util.stripFileExtension(file)}';\n`)
  .join('')}`;

module.exports = exportFile;