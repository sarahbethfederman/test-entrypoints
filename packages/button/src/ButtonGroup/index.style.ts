import styled from 'styled-components';
import { ml, SpacingName } from '@lendi-ui/spacing';
import { Wrapper as ButtonWrapper, ButtonSize } from '../Button/index.style';

const spacingBySize: { [size in ButtonSize]: SpacingName } = {
  lg: 'md',
  md: 'sm',
  sm: 'xs',
  xs: 'xxs',
};
export interface WrapperProps {
  size: ButtonSize;
}

export const Wrapper = styled.div`
  ${ButtonWrapper} + ${ButtonWrapper} {
    ${({ size }: WrapperProps) => ml(spacingBySize[size])}
  }
`;
