import styled, { css } from 'styled-components';
import { Spacing, mt, mr, SpacingName } from '@lendi-ui/spacing';
import { Wrapper as ButtonWrapper, ButtonSize } from '../Button/index.style';

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
  ${ButtonWrapper} {
    ${({ size }: WrapperProps) => css`
      ${mt(spacingBySize[size])} ${mr(spacingBySize[size])};
    `};
  }
`;
