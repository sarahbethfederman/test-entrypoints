const disclaimer = require('./disclaimer.template');

let icon = (code) => `${disclaimer}
import { IconWrapper, IconProps } from './util';
${code}
`;

module.exports = icon;
