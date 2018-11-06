import styled, { css } from 'styled-components';
import { Spacing, mt, mr, SpacingName } from '@lendi-ui/spacing';
import { ButtonWrapper, LinkWrapper, ButtonSize } from '../Button/index.style';

const spacingBySize: { [size in ButtonSize]: SpacingName } = {
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
  margin-top: calc(-1 * ${({ size }: WrapperProps) => Spacing[spacingBySize[size]]});
  ${({ isFullWidth }: WrapperProps) =>
    isFullWidth &&
    css`
      margin-right: calc(-1 * ${({ size }: WrapperProps) => Spacing[spacingBySize[size]]});
    `}
  ${ButtonWrapper}, ${LinkWrapper} {
    ${({ size }: WrapperProps) => css`
      ${mt(spacingBySize[size])} ${mr(spacingBySize[size])};
    `};
  }
`;
