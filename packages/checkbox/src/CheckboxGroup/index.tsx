import * as React from 'react';
import styled from 'styled-components';
import { Wrapper, Direction } from './index.style';
import { Checkbox, CheckboxProps, Size } from '../Checkbox/index';
import { mb } from '@lendi-ui/spacing';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface CheckboxGroupItemProps {
  value: string;
  label?: string;
  isDisabled?: boolean;
  className?: string;
}

const CustomCheckbox = styled(Checkbox)`
  ${mb('xxs')};
`;

const CheckboxGroupItem: React.FunctionComponent<CheckboxGroupItemProps> = (props) => (
  <CheckboxContext.Consumer>
    {(state: CheckboxGroupContext) => (
      <CustomCheckbox {...props} {...state} isChecked={state.values.includes(props.value)} />
    )}
  </CheckboxContext.Consumer>
);

export interface CheckboxGroupContext extends LUIGlobalProps {
  isBoxed?: boolean;
  values: string[]; // all the checked items
  className?: string;
  size?: Size;
}

export interface CheckboxGroupProps extends CheckboxGroupContext {
  direction?: Direction;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement<CheckboxProps> | React.ReactElement<CheckboxProps>[] | null;
}

const CheckboxContext = React.createContext<CheckboxGroupContext>({
  values: [],
});

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static Checkbox = CheckboxGroupItem;
  render() {
    const {
      children,
      values,
      isBoxed = false,
      className,
      direction = 'column',
      isDisabled,
      onChange,
      size = 'md',
      ...checkboxProps
    } = this.props;

    const checkboxGroupWrapperProps = { isBoxed, values, isDisabled, onChange, size };
    return (
      <CheckboxContext.Provider value={checkboxGroupWrapperProps}>
        <Wrapper direction={direction} className={className} {...checkboxProps}>
          {children}
        </Wrapper>
      </CheckboxContext.Provider>
    );
  }
}