import styled, { css } from 'styled-components';
import { Spacing, SpacingName } from '@lendi-ui/spacing';
import { ButtonWrapper, LinkWrapper, ButtonSize, Size } from '../Button/index.style';
import { map } from '@lendi-ui/breakpoint';
import { deriveSize, normalise } from '@lendi-ui/utils';
import { IconButtonWrapper } from '../IconButton/index.style';

const spacingTopBySizeMixin = (size: ButtonSize): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
      case 'sm':
      case 'md':
      case 'lg':
        return css`
          margin-top: calc(-1 * ${Spacing[spacingBySize[val]]});
        `;
      default:
        return undefined;
    }
  });

const spacingRightBySizeMixin = (size: ButtonSize): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
      case 'sm':
      case 'md':
      case 'lg':
        return css`
          margin-right: calc(-1 * ${Spacing[spacingBySize[val]]});
        `;
      default:
        return undefined;
    }
  });

const wrapperBySizeMixin = (size: ButtonSize, isFullWidth?: boolean): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'xs':
        return css`
          margin-top: ${deriveSize(0.5)};
          ${!isFullWidth && `margin-right: ${deriveSize(0.5)}`};
        `;
      case 'sm':
        return css`
          margin-top: ${deriveSize(0.75)};
          ${!isFullWidth && `margin-right: ${deriveSize(0.75)}`};
        `;
      case 'md':
        return css`
          margin-top: ${deriveSize(1)};
          ${!isFullWidth && `margin-right: ${deriveSize(1)}`};
        `;
      case 'lg':
        return css`
          margin-top: ${deriveSize(1.5)};
          ${!isFullWidth && `margin-right: ${deriveSize(1.5)}`};
        `;
      default:
        return undefined;
    }
  });

const spacingBySize: { [size in Size]: SpacingName } = {
  lg: 'md',
  md: 'sm',
  sm: 'xs',
  xs: 'xxs',
};

export interface WrapperProps {
  size: ButtonSize;
  isFullWidth?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${normalise};
  display: inline-flex;
  flex-wrap: wrap;
  ${({ size }) => spacingTopBySizeMixin(size)};
  ${({ size, isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
      ${spacingRightBySizeMixin(size)};
    `}
  ${ButtonWrapper}, ${IconButtonWrapper} {
    ${({ size, isFullWidth }) => css`
      ${wrapperBySizeMixin(size, isFullWidth)};
    `};
  }
`;
