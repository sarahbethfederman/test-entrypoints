const util = require('./util');
const disclaimer = require('./disclaimer.template');

const exportFile = (files) => `${disclaimer}
export interface SvgProps {
  fill: string;
}

export interface IconProps {
  color: string;
  width?: string;
  height?: string;
  className?: string;
}

${files
  .map((file) => {
    const fileName = util.pascalCase(file);
    return `export { ${fileName}${util.listAlias(fileName)} } from './icons-compiled/${util.stripFileExtension(
      file
    )}';\n`;
  })
  .join('')}`;

module.exports = exportFile;
