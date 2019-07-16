const disclaimer = require('./disclaimer.template');

let utils = `${disclaimer}
import styled from 'styled-components';
import { color as getColor } from '@lendi-ui/color';

export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const IconWrapper = styled.span\`
  width: \${({ width }: IconProps) => width || '1em'};
  height: \${({ height }: IconProps) => height || '1em'};
  vertical-align: middle;
  display: inline-block;

  & > svg {
    fill: \${({ color }: IconProps) => color ? getColor(color) : 'currentColor'};
    width: inherit;
    height: inherit;
  }
\`
`;

module.exports = utils;
