// @ts-ignore
import * as React from 'react';
import styledComponents, { css } from 'styled-components';

interface ICarouselContainer {
  width?: string;
  height?: string;
}

export const CarouselContainer = styledComponents.div`
    position: relative;
    overflow: hidden;
    width: ${({ width }: ICarouselContainer) => width};
    height: ${({ height }) => height};
`;

interface ISlide {
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
    width: ${({ width }: ISlide) => width};
    height: ${({ height }: ISlide) => height};
    ${({ active }: ISlide) =>
      active &&
      css`
        transition: left ${({ speed }) => speed}ms linear;
        left: 0;
      `}
    ${({ prevActiveIdx }: ISlide) =>
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

interface IIndicator {
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
    ${({ active }: IIndicator) =>
      active &&
      css`
        background: #666666;
      `}
`;
