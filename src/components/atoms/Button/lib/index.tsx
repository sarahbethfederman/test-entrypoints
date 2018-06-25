import React from 'react';
import styled from './theme';

export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}

const ButtonWrapper = styled.button`
  background-color: coral;
`;

const noop = () => {}; // tslint:disable-line

export const Button = (props: Props) => {
  const { label, onClick, disabled = false } = props;

  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={!disabled ? onClick : noop}
    >
      <span>{label}</span>
    </ButtonWrapper>
  );
};
