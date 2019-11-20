import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { select } from '@lendi-ui/theme';
import { py, px } from '@lendi-ui/spacing';
import { deriveSize } from '@lendi-ui/utils';

export type Position = 'left' | 'right' | 'top' | 'bottom';

interface ContentProps {
  isOpen: boolean;
  position: Position;
}

export const TooltipWrapper = styled.span`
  position: relative;
`;

export const ContentWrapper = styled.div`
  ${bg('shade.0')};
  ${py('sm')};
  ${px('xxs')};
  max-width: ${deriveSize(16.25)};
  min-width: ${deriveSize(3.75)};
  width: max-content;
  z-index: 3;
  text-align: left;
  border-radius: ${select('borderRadius')};
  ${depth(3)};
  overflow: hidden;
  position: absolute;
  transition: opacity 0.35s ease 0s;
  ${({ isOpen }: ContentProps) => {
    if (isOpen) {
      return css`
        visibility: visible;
      `;
    } else {
      return css`
        visibility: hidden;
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.6s;
      `;
    }
  }};

  ${({ position }: ContentProps) => {
    switch (position) {
      case 'top':
        return css`
          bottom: calc(100% + ${deriveSize(0.5)});
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return css`
          top: calc(100% + ${deriveSize(0.5)});
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return css`
          right: calc(100% + ${deriveSize(0.5)});
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right':
        return css`
          left: calc(100% + ${deriveSize(0.5)});
          top: 50%;
          transform: translateY(-50%);
        `;
    }
  }};
`;
