const disclaimer = require('./disclaimer.template');

let lenderLogo = (code) => `${disclaimer}
import { LenderLogoWrapper, LenderLogoProps } from './util';
${code}
`;

module.exports = lenderLogo;
