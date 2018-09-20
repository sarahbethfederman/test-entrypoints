import * as React from 'react';
import { ButtonVariant, ButtonSize, Wrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';

export { ButtonSize, ButtonVariant };

export interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  isInverse?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { size = 'md', before, after, children, ...wrapperProps } = this.props;
    return (
      <Wrapper size={size} {...wrapperProps}>
        <Layout>
          {before && <BeforeWrapper size={size}>{before}</BeforeWrapper>}
          <span>{children}</span>
          {after && <AfterWrapper size={size}>{after}</AfterWrapper>}
        </Layout>
      </Wrapper>
    );
  }
}
