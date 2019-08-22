const disclaimer = require('./disclaimer.template');

let utils = `${disclaimer}
import styled from 'styled-components';

export interface LenderLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export const LenderLogoWrapper = styled.span\`
  width: \${({ width }: LenderLogoProps) => width || '1em'};
  height: \${({ height }: LenderLogoProps) => height || '1em'};
  vertical-align: middle;

  & > svg {
    width: inherit;
    height: inherit;
  }
\`
`;

module.exports = utils;
