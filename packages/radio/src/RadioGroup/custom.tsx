import * as React from 'react';
import styled from 'styled-components';
import { Radio } from '../Radio/index';
import { mb } from '@lendi-ui/spacing';
import { RadioContext, RadioGroupContext } from './context';

export interface RadioGroupItemProps {
  value: string;
  label?: string;
  isDisabled?: boolean;
  className?: string;
}

export const CustomRadio = styled(Radio)`
  ${mb('xxs')};
`;

export const RadioGroupItem: React.SFC<RadioGroupItemProps> = (props) => (
  <RadioContext.Consumer>
    {(state: RadioGroupContext) => (
      <CustomRadio {...props} {...state} isChecked={state.selectedValue.includes(props.value)} />
    )}
  </RadioContext.Consumer>
);
