import styled, { css } from 'styled-components';
import { color } from '@lendi-ui/color';
import { CarouselDotsStyleProps } from '../types';

export const IndicatorContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 100%;
  text-align: center;
`;

export const Indicator = styled.span<CarouselDotsStyleProps>`
  display: inline-block;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  transition: background 100ms ease-in;
  cursor: pointer;
  background: ${color('shade.200')};
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${color('shade.600')};
    `}
`;
