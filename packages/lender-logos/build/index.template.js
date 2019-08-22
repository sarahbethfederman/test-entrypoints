const util = require('./util');
const disclaimer = require('./disclaimer.template');

const exportFile = (files) => `${disclaimer}

export interface LenderLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

${files
  .map((file) => {
    const fileName = util.pascalCase(file);
    return `export { ${fileName} } from './${util.stripFileExtension(file)}';\n`;
  })
  .join('')}`;

module.exports = exportFile;
