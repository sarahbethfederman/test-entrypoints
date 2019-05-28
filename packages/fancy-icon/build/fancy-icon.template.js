const disclaimer = require('./disclaimer.template');

let fancyIcon = (code) => `${disclaimer}
import { FancyIconWrapper, FancyIconProps } from './util';
${code}
`;

module.exports = fancyIcon;
