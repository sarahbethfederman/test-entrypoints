import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

import { Wrapper } from './index.style';
import { ButtonVariant, ButtonSize, Button } from '../Button';
import { IconButton, IconButtonSize, IconProps } from '../IconButton';

export interface ButtonGroupButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonGroupIconButtonProps {
  color?: string;
  href?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  size?: IconButtonSize;
  icon: React.FunctionComponent<IconProps>;
}

const ButtonGroupButton: React.FunctionComponent<ButtonGroupButtonProps> = (props) => (
  <ButtonContext.Consumer>{(state: ButtonGroupContext) => <Button {...props} {...state} />}</ButtonContext.Consumer>
);

const ButtonGroupIconButton: React.FunctionComponent<ButtonGroupIconButtonProps> = (props) => (
  <ButtonContext.Consumer>{(state: ButtonGroupContext) => <IconButton {...props} {...state} />}</ButtonContext.Consumer>
);

export interface ButtonGroupContext extends LUIGlobalProps {
  size?: ButtonSize;
  isInverse?: boolean;
  isLoading?: boolean;
  className?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
}

export interface ButtonGroupProps extends ButtonGroupContext {
  children?:
    | React.ReactElement<ButtonGroupButtonProps>
    | React.ReactElement<ButtonGroupButtonProps>[]
    | React.ReactElement<ButtonGroupIconButtonProps>
    | React.ReactElement<ButtonGroupIconButtonProps>[];
}

const ButtonContext = React.createContext<ButtonGroupContext>({});

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static Button = ButtonGroupButton;
  static IconButton = ButtonGroupIconButton;

  render() {
    const {
      size = 'md',
      className,
      isFullWidth,
      children,
      isInverse,
      isLoading = false,
      isDisabled,
      ...btnProps
    } = this.props;
    const buttonGroupWrapperProps = { size, isFullWidth, isInverse, isDisabled, isLoading };

    return (
      <ButtonContext.Provider value={buttonGroupWrapperProps}>
        <Wrapper className={className} size={size} isFullWidth={isFullWidth} {...btnProps}>
          {children}
        </Wrapper>
      </ButtonContext.Provider>
    );
  }
}
