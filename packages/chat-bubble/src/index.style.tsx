import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';

import { Direction } from './types';

interface WrapperProps {
  direction: Direction;
}

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  ${({ direction }: WrapperProps) => {
    if (direction === 'left') return `align-items: flex-end;`;
    return `align-items: flex-start;`;
  }}
`;

const LeftSideWrapper = () => css`
  position: relative;
  border-radius: 0 5px 5px 5px;

  :before {
    content: '';
    width: 20px;
    height: 20px;
    top: 0px;
    right: 100%;
    position: absolute;
    background: inherit;
  }

  :after {
    content: '';
    width: 20px;
    height: 40px;
    border-radius: 0 20px 20px 0;
    top: 0px;
    right: 100%;
    position: absolute;
    ${bg('shade.0')}
  }
`;

const RightSideWrapper = () => css`
  position: relative;
  border-radius: 5px 0 5px 5px;

  :before {
    content: '';
    width: 20px;
    height: 20px;
    top: 0px;
    left: 100%;
    position: absolute;
    background: inherit;
  }

  :after {
    content: '';
    width: 20px;
    height: 40px;
    border-radius: 20px 0 0 20px;
    top: 0px;
    left: 100%;
    position: absolute;
    ${bg('shade.0')}
  }
`;

interface ChatBubbleContentWrapperProps {
  direction: Direction;
}

export const ChatBubbleContentWrapper = styled.div`
  ${({ direction }: ChatBubbleContentWrapperProps) => {
    if (direction === 'left') return LeftSideWrapper();
    return RightSideWrapper();
  }}
`;
