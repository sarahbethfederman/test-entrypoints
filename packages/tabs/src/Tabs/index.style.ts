import styled, { css } from 'styled-components';
import { grid } from '@lendi-ui/grid';
import { bg } from '@lendi-ui/color';
import { gte } from '@lendi-ui/breakpoint';

const GRADIENT = 0;
const ICON = 1;

export interface WrapperProps {
  isInverse: boolean;
  isScrollable: boolean;
}

const commonScrollGradientStyle = css`
  position: sticky;
  content: '\\2007 \\2007';
  width: 20px;
  pointer-events: none;
  z-index: ${GRADIENT};
`;

const commonIconWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  cursor: pointer;
  z-index: ${ICON};
`;

export const Wrapper = styled.div`
  ${grid({ halign: 'left', wrap: false })};
  ${(props: WrapperProps) => (props.isInverse ? 'background: transparent' : bg('primary.500'))};
  min-height: 48px;
  overflow-x: auto;
  width: 100%;
  position: relative;
  ${(props: WrapperProps) =>
    props.isScrollable &&
    `&::after {
    ${commonScrollGradientStyle}
    right: 0px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    }
    &::before {
      ${commonScrollGradientStyle}
      left: 0px;
      background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    }
  `};
`;

export const RightIconWrapper = styled.div`
  display: none;
  ${gte('desktop')`
    ${commonIconWrapperStyle}
    right: 0px;
    margin-right: -20px;
  `};
`;

export const LeftIconWrapper = styled.div`
  display: none;
  ${gte('desktop')`
    ${commonIconWrapperStyle}
    left: 0px;
    margin-left: -20px;
  `};
`;
