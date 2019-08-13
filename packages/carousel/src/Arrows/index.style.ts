import styled from 'styled-components';
import { color } from '@lendi-ui/color';
import { CarouselArrowStyleProps } from '../types';

const Arrow = styled.a<CarouselArrowStyleProps>`
  position: absolute;
  top: ${({ offset }) => (offset ? offset.y : 0)}px;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  color: ${color('primary.500')};
  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
  display: ${({ hide }) => (hide ? 'none' : 'inherit')};
`;

export const StyledPreviousArrow = styled(Arrow)`
  left: ${({ offset }) => (offset ? offset.x : 0)}px;
`;

export const StyledNextArrow = styled(Arrow)`
  right: ${({ offset }) => (offset ? offset.x : 0)}px;
`;
