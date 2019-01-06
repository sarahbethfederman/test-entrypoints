import * as React from 'react';
import styled from 'styled-components';
import * as createReactContext from 'create-react-context';
import { Wrapper, Direction } from './index.style';
import { Checkbox, CheckboxProps } from '../Checkbox/index';
import { mb } from '@lendi-ui/spacing';

export interface CheckboxGroupItemProps {
  value: string;
  label?: string;
  isDisabled?: boolean;
  className?: string;
}

const CustomCheckbox = styled(Checkbox)`
  ${mb('xxs')};
`;

const CheckboxGroupItem: React.SFC<CheckboxGroupItemProps> = (props) => (
  <CheckboxContext.Consumer>
    {(state: CheckboxGroupContext) => (
      <CustomCheckbox {...props} {...state} isChecked={state.values.includes(props.value)} />
    )}
  </CheckboxContext.Consumer>
);

export interface CheckboxGroupContext {
  isBoxed?: boolean;
  values: string[]; //all the checked items
  className?: string;
}

export interface CheckboxGroupProps extends CheckboxGroupContext {
  direction?: Direction;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement<CheckboxProps> | React.ReactElement<CheckboxProps>[] | null;
}

// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore

const CheckboxContext = createReactContext<CheckboxGroupContext>({});

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static Checkbox = CheckboxGroupItem;
  render() {
    const { children, values, isBoxed = false, className, direction = 'column', ...checkboxProps } = this.props;
    const checkboxGroupWrapperProps = { ...checkboxProps, isBoxed, values };
    return (
      <CheckboxContext.Provider value={checkboxGroupWrapperProps}>
        <Wrapper direction={direction} className={className}>
          {children}
        </Wrapper>
      </CheckboxContext.Provider>
    );
  }
}
