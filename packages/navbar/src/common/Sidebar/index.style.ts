import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';
import { Spacing } from '@lendi-ui/spacing';
import { State, mixin } from '@lendi-ui/transition';
import { depth } from '@lendi-ui/depth';
import { OldMenuButton } from '../Header/index.style';
import * as ZINDEX from '../../constants/z-index';

export interface WrapperProps {
  side: 'left' | 'right';
  transition: State;
}

const MINIMUM_GUTTER_WIDTH = '3rem';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: calc(100% - ${MINIMUM_GUTTER_WIDTH});
  max-width: 22.5rem;
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

export const CloseButton = styled(OldMenuButton)`
  position: absolute;
  top: ${Spacing.xxxs};
  line-height: 0;
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  z-index: ${ZINDEX.OVERLAY};
`;
