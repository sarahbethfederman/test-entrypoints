import styled, { keyframes } from 'styled-components';

export interface SlideContainerProps {
  previousLeft: number;
  currentLeft: number;
  height: string;
  speed: number;
}

const slide = (previousLeft: number, currentLeft: number) => keyframes`
  from {
    transform: translate(${previousLeft}px)
  }

  to {
    transform: translate(${currentLeft}px)
  }
`;

export const SlideContainer = styled.div<SlideContainerProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: ${(props) => props.height};

  > * {
    flex-shrink: 0;
    box-sizing: border-box;
    animation: ${(props) => slide(props.previousLeft, props.currentLeft)} ${(props) => props.speed}ms ease-in-out;
    transform: translate(${(props) => props.currentLeft}px)
  }

  /* > *:first-child {
    margin-left: ${(props) => props.currentLeft};
  } */
`;
