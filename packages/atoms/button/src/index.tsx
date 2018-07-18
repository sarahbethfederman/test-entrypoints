import * as React from 'react';
import { ButtonWrapper } from './index.style';

export interface ButtonProps {
  isDisabled?: boolean;
  isFullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { isDisabled = false, isFullWidth, onClick, children } = props;
  return (
    <ButtonWrapper disabled={isDisabled} isFullWidth={isFullWidth} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
