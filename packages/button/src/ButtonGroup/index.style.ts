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
}

export const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: -${({ size }: WrapperProps) => Spacing[spacingBySize[size]]};
  margin-right: -${({ size }: WrapperProps) => Spacing[spacingBySize[size]]};
  ${ButtonWrapper}, ${LinkWrapper} {
    ${({ size }: WrapperProps) => css`
      ${mt(spacingBySize[size])} ${mr(spacingBySize[size])};
    `};
  }
`;
