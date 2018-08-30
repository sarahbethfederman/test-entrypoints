import * as React from 'react';
import { Variant, Size, Wrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';

export { Size, Variant };

export interface ButtonProps {
  variant: Variant;
  size?: Size;
  isInverse?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
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

export default Button;
