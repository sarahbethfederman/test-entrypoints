import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';

import { Direction } from './types';
import { ChatContextState } from '.';

interface WrapperProps {
  direction: Direction;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ direction }: WrapperProps) => {
    if (direction === 'left') return `align-items: flex-start;`;
    return `align-items: flex-end;`;
  }}
`;

export const AlignmentDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${({ direction }: WrapperProps) => {
    if (direction === 'left') return `align-items: flex-start;`;
    return `align-items: flex-end;`;
  }}
`;

const BeforeCommonStyle = () => css`
  content: '';
  width: 16px;
  height: 16px;
  top: 0px;
  position: absolute;
  background: inherit;
`;

const AfterCommonStyle = () => css`
  content: '';
  width: 16px;
  height: 32px;
  top: 0px;
  position: absolute;
  ${bg('shade.0')}
`;

const LeftSideWrapper = () => css`
  position: relative;
  border-radius: 0 5px 5px 5px;

  display: flex;

  :before {
    ${BeforeCommonStyle};
    right: 100%;
  }

  :after {
    ${AfterCommonStyle};
    border-radius: 0 20px 20px 0;
    right: 100%;
  }
`;

const RightSideWrapper = () => css`
  position: relative;
  border-radius: 5px 0 5px 5px;

  :before {
    ${BeforeCommonStyle};
    left: 100%;
  }

  :after {
    ${AfterCommonStyle};
    border-radius: 20px 0 0 20px;
    left: 100%;
  }
`;

export const ChatBubbleContentWrapper = styled.div`
  ${({ direction, hasTail }: ChatContextState) => {
    if (hasTail) {
      if (direction === 'left') return LeftSideWrapper();
      return RightSideWrapper();
    } else {
      return css`
        border-radius: 5px;
      `;
    }
  }}
`;
