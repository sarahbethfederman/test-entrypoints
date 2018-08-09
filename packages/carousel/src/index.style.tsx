// @ts-ignore
import * as React from 'react';
// @ts-ignore
import styledComponents, { css, StyledComponentClass } from 'styled-components';

export interface CarouselContainerProps {
  width?: string;
  height?: string;
}

export const CarouselContainer = styledComponents.div`
    position: relative;
    overflow: hidden;
    width: ${({ width }: CarouselContainerProps) => width};
    height: ${({ height }) => height};
`;

export interface SlideProps {
  duration?: number;
  speed?: number;
  width?: string;
  height?: string;
  active: boolean;
  prevActiveIdx?: boolean;
}

export const Slide = styledComponents.div`
    position: absolute;
    left: 100%;
    width: ${({ width }: SlideProps) => width};
    height: ${({ height }: SlideProps) => height};
    ${({ active }: SlideProps) =>
      active &&
      css`
        transition: left ${({ speed }) => speed}ms linear;
        left: 0;
      `}
    ${({ prevActiveIdx }: SlideProps) =>
      prevActiveIdx &&
      css`
        transition: left ${({ speed }) => speed}ms linear;
        left: -100%;
      `}
`;

export const IndicatorContainer = styledComponents.div`
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    text-align: center;
`;

IndicatorContainer.displayName = 'indicatorContainer';

export interface IndicatorProps {
  active: boolean;
  indicatorColor?: string;
  indicatorActiveColor?: string;
}

export const Indicator = styledComponents.span`
    display: inline-block;
    margin: 0 5px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    transition: background 100ms linear;
    cursor: pointer;
    background: #CCCCCC;
    ${({ active }: IndicatorProps) =>
      active &&
      css`
        background: #666666;
      `}
`;
