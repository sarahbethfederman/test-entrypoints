import styled from 'styled-components';
import { color } from '@lendi-ui/color';
import { Colors } from '@lendi-ui/theme';

export const Svg = styled.svg`
  width: 143px;
`;

export interface PathProps {
  fill: Colors;
}

export const Path = styled.path<PathProps>`
  fill: ${({ fill }) => color(fill)};
`;
