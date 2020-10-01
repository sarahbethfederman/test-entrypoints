import styled from 'styled-components';
import { color as getColor } from '@lendi-ui/color';
import { Colors } from '@lendi-ui/theme';

export interface IconProps {
  color?: Colors;
  width?: string;
  height?: string;
  className?: string;
}

export const IconWrapper = styled.span`
  width: ${({ width }: IconProps) => width ?? '1em'};
  height: ${({ height }: IconProps) => height ?? '1em'};
  vertical-align: middle;
  display: inline-block;

  & > svg {
    fill: ${({ color }: IconProps) => (color ? getColor(color) : 'currentColor')};
    width: inherit;
    height: inherit;
  }

  .fillPath {
    fill: ${({ color }: IconProps) => (color ? getColor(color) : 'currentColor')};
  }
`;
