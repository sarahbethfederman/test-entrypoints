import * as React from 'react';
import { Wrapper } from './index.style';
import { Button, ButtonVariant, ButtonSize } from '../Button';

// isFullWidth isn't supported in a button group
export interface ButtonGroupButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonGroupButton: React.SFC<ButtonGroupButtonProps> = () => null;

export interface ButtonGroupProps {
  size?: ButtonSize;
  isInverse?: boolean;
  children?: React.ReactElement<ButtonGroupButtonProps> | React.ReactElement<ButtonGroupButtonProps>[];
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static Button = ButtonGroupButton;

  render() {
    const { size = 'md', children, ...restProps } = this.props;
    return (
      <Wrapper size={size}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<ButtonGroupButtonProps>(child)) {
            return <Button {...child.props} {...restProps} size={size} />;
          } else {
            return child; // should we error?
          }
        })}
      </Wrapper>
    );
  }
}
