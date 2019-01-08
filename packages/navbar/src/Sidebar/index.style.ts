import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';
import { Spacing } from '@lendi-ui/spacing';
import { State, mixin } from '@lendi-ui/transition';
import { depth } from '@lendi-ui/depth';
import { MenuButton } from '../Header/index.style';
import * as ZINDEX from '../constants/z-index';

export interface WrapperProps {
  side: 'left' | 'right';
  transition: State;
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 22.5rem;
  overflow: hidden;
  transition: transform 0.25s;
  ${bg('shade.0')} ${depth(1)}
  z-index: ${ZINDEX.SIDEBAR};

  ${({ side }: WrapperProps) => {
    if (side === 'left') {
      return css`
        left: 0;
        transform: translateX(-100%);
        ${CloseButton} {
          right: ${Spacing.xxxs};
        }
      `;
    } else {
      return css`
        right: 0;
        transform: translateX(100%);
        ${CloseButton} {
          left: ${Spacing.xxxs};
        }
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

export interface CloseButtonProps {
  side: 'left' | 'right';
}

export const CloseButton = styled(MenuButton)`
  position: absolute;
  top: ${Spacing.xxxs};
`;
