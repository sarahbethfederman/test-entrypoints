import * as React from 'react';
import { Wrapper } from './index.style';
import { Button, ButtonVariant, ButtonSize } from '../Button';

// isFullWidth isn't supported in a button group
export interface ButtonGroupButtonProps {
  variant: ButtonVariant;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroupButton: React.SFC<ButtonGroupButtonProps> = () => null;

export interface ButtonGroupProps {
  size?: ButtonSize;
  isInverse?: boolean;
  className?: string;
  children?: React.ReactElement<ButtonGroupButtonProps> | React.ReactElement<ButtonGroupButtonProps>[];
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static Button = ButtonGroupButton;

  render() {
    const { size = 'md', children, ...btnProps } = this.props;
    return (
      <Wrapper size={size}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<ButtonGroupButtonProps>(child)) {
            // throw new Error('ButtonGroup: Child must be a ButtonGroup.Button');
            return null;
          }
          return <Button {...child.props} {...btnProps} size={size} />;
        })}
      </Wrapper>
    );
  }
}
