import styled from 'styled-components';
import { color } from '@lendi-ui/color';

export const Svg = styled.svg`
  width: 143px;
`;

export interface PathProps {
  fill: string;
}

export const Path = styled.path`
  fill: ${({ fill }: PathProps) => color(fill)};
`;
