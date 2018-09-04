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
  children?: React.ReactNode;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { variant, size = 'md', isInverse, isFullWidth, isDisabled, before, after, children } = this.props;
    return (
      <Wrapper variant={variant} size={size} isInverse={isInverse} isFullWidth={isFullWidth} disabled={isDisabled}>
        <Layout>
          {before && <BeforeWrapper size={size}>{before}</BeforeWrapper>}
          <span>{children}</span>
          {after && <AfterWrapper size={size}>{after}</AfterWrapper>}
        </Layout>
      </Wrapper>
    );
  }
}
