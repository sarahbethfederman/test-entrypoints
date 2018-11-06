import * as React from 'react';
import * as createReactContext from 'create-react-context';
import { Wrapper } from './index.style';
import { ButtonVariant, ButtonSize, Button } from '../Button';

export interface ButtonGroupButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroupButton: React.SFC<ButtonGroupButtonProps> = (props) => (
  <ButtonContext.Consumer>{(state: ButtonGroupContext) => <Button {...props} {...state} />}</ButtonContext.Consumer>
);

export interface ButtonGroupContext {
  size?: ButtonSize;
  isInverse?: boolean;
  className?: string;
  isFullWidth?: boolean;
}

export interface ButtonGroupProps extends ButtonGroupContext {
  children?: React.ReactElement<ButtonGroupButtonProps> | React.ReactElement<ButtonGroupButtonProps>[];
}

// Supressing "Cannot invoke an expression whose type lacks a call signature." error
// More details here: https://github.com/jamiebuilds/create-react-context/pull/20
// @ts-ignore
const ButtonContext = createReactContext<ButtonGroupContext>({});

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static Button = ButtonGroupButton;

  render() {
    const { size = 'md', className, isFullWidth, children, ...btnProps } = this.props;
    const buttonGroupWrapperProps = { ...btnProps, size, isFullWidth };
    return (
      <ButtonContext.Provider value={buttonGroupWrapperProps}>
        <Wrapper className={className} size={size} isFullWidth={isFullWidth}>
          {children}
        </Wrapper>
      </ButtonContext.Provider>
    );
  }
}
