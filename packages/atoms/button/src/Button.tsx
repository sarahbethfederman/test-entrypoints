import * as React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: coral;
`;

export interface ButtonProps {
  /**
   * Disables onclick
   *
   * @default false
   */
  isDisabled?: boolean;

  /** this dictates what the button will do  */
  onClick?: () => void;

  /** this dictates what the button will say  */
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { isDisabled = false, onClick, children } = props;
  return (
    <ButtonWrapper disabled={isDisabled} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
