import styled, { css } from 'styled-components';
import { Spacing, SpacingName } from '@lendi-ui/spacing';
import { ButtonWrapper, LinkWrapper, ButtonSize, Size } from '../Button/index.style';
import { map } from '@lendi-ui/breakpoint';
import { deriveSize } from '@lendi-ui/utils';

const spacingTopBySizeMixin = (size: ButtonSize): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return css`
          margin-top: calc(-1 * ${Spacing[spacingBySize[val]]});
        `;
      case 'md':
        return css`
          margin-top: calc(-1 * ${Spacing[spacingBySize[val]]});
        `;
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
      case 'sm':
        return `
        margin-right: calc(-1 * ${Spacing[spacingBySize[val]]});
      `;
      case 'md':
        return `
        margin-right: calc(-1 * ${Spacing[spacingBySize[val]]});
      `;
      case 'lg':
        return `
        margin-right: calc(-1 * ${Spacing[spacingBySize[val]]});
      `;
      default:
        return undefined;
    }
  });

const wrapperBySizeMixin = (size: ButtonSize): SpacingName =>
  map(size, (val) => {
    switch (val) {
      case 'sm':
        return `
        margin-top: ${deriveSize(0.75)};
        margin-right: ${deriveSize(0.75)};
      `;
      case 'md':
        return `
        margin-top: ${deriveSize(1)};
        margin-right: ${deriveSize(1)};
      `;
      case 'lg':
        return `
        margin-top: ${deriveSize(1.5)};
        margin-right: ${deriveSize(1.5)};
      `;
      default:
        return undefined;
    }
  });

const spacingBySize: { [size in Size]: SpacingName } = {
  lg: 'md',
  md: 'sm',
  sm: 'xs',
};

export interface WrapperProps {
  size: ButtonSize;
  isFullWidth?: boolean;
}

export const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  ${({ size }: { size: ButtonSize }) => spacingTopBySizeMixin(size)};
  ${({ size, isFullWidth }: WrapperProps) =>
    isFullWidth &&
    css`
      ${spacingRightBySizeMixin(size)};
    `}
  ${ButtonWrapper}, ${LinkWrapper} {
    ${({ size }: WrapperProps) => css`
      ${wrapperBySizeMixin(size)};
    `};
  }
`;
