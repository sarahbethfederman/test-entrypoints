import styled, { css } from 'styled-components';
import { normalise } from '@lendi-ui/utils';
import { State, mixin } from '@lendi-ui/transition';
import { depth } from '@lendi-ui/depth';
import { bg, color } from '@lendi-ui/color';
import { mt, mb } from '@lendi-ui/spacing';

import { MINIMUM_GUTTER_WIDTH, SIDEBAR_ZINDEX } from './constants';

export interface WrapperProps {
  side: 'left' | 'right';
  top: number;
  transition: State;
}

export const Wrapper = styled.div`
  ${normalise}
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: calc(100% - ${MINIMUM_GUTTER_WIDTH});
  max-width: 22.5rem;
  overflow: hidden;
  transition: transform 0.25s;
  z-index: ${SIDEBAR_ZINDEX};
  ${bg('shade.0')} ${depth(1)};

  ${({ side, top }: WrapperProps) => {
    if (side === 'left') {
      return css`
        left: 0;
        top: ${top}px;
        transform: translateX(-100%);
      `;
    } else {
      return css`
        right: 0;
        top: ${top}px;
        transform: translateX(100%);
      `;
    }
  }} ${({ side, transition }: WrapperProps) => {
    if (side === 'left') {
      return mixin(transition, {
        entering: { transform: 'translateX(0)' },
        entered: { transform: 'translateX(0)' },
        exit: { transform: 'translateX(0)' },
        exiting: { transform: 'translateX(-100%)' },
      });
    } else {
      return mixin(transition, {
        entering: { transform: 'translateX(0)' },
        entered: { transform: 'translateX(0)' },
        exit: { transform: 'translateX(0)' },
        exiting: { transform: 'translateX(100%)' },
      });
    }
  }};
`;

export const SidebarContent = styled.div`
  width: 100%;
  ${mb('auto')}
`;

export const SidebarFooter = styled.div`
  width: 100%;
  ${({ isTopShadow }: { isTopShadow: boolean }) => {
    if (isTopShadow) {
      return css`
        flex-shrink: 0;
        border-top: 1px solid ${color('shade.100')};
        ${depth(4)};
      `;
    }
    return undefined;
  }}
  ${mt('auto')}
`;
