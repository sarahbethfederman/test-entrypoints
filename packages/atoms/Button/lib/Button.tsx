import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   */
  disabled?: boolean;
}

const ButtonWrapper = styled.button`
  background-color: coral;
`;

export const Button = (props: IProps) => {
  const { label, onClick, disabled = false } = props;

  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      <span>{label}</span>
    </ButtonWrapper>
  );
};
