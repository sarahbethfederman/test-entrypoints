const disclaimer = require('./disclaimer.template');

let utils = `${disclaimer}
import styled from 'styled-components';
import { color as getColor } from '@lendi-ui/color';

export interface IconProps {
  color: string;
  width?: string;
  height?: string;
  className?: string;
}

export const IconWrapper = styled.span\`
  width: \${({ width }: IconProps) => width || undefined};
  height: \${({ height }: IconProps) => height || undefined};

  & > svg {
    fill: \${({ color }: IconProps) => getColor(color)};
    stroke: \${({ color }: IconProps) => getColor(color)};
    width: inherit;
    height: inherit;
  }
\`
`;

module.exports = utils;
