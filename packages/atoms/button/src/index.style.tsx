// @ts-ignore
import * as React from 'react';
import styled from 'styled-components';

export interface ButtonWrapperProps {
  isFullWidth?: boolean;
}

export const ButtonWrapper = styled.button`
  background-color: coral;
  width: ${({ isFullWidth }: ButtonWrapperProps) => (isFullWidth ? '100%' : 'auto')};
`;
