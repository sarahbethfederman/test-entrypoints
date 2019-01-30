import * as React from 'react';
import {
  ButtonVariant,
  ButtonSize,
  ButtonWrapper,
  LinkWrapper,
  Layout,
  BeforeWrapper,
  AfterWrapper,
} from './index.style';

export { ButtonSize, ButtonVariant };

export interface ButtonProps {
  ariaLabel?: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  isInverse?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export class Button extends React.Component<ButtonProps> {
  get commonProps() {
    const { variant, size = 'md', isInverse, isFullWidth, isDisabled, className } = this.props;
    return {
      variant,
      size,
      isInverse,
      isFullWidth,
      isDisabled,
      className,
    };
  }

  get linkProps() {
    const { href } = this.props;
    return {
      href,
    };
  }

  get buttonProps() {
    const { onClick } = this.props;
    return {
      onClick,
    };
  }

  renderContent() {
    const { size = 'md', before, after, children } = this.props;
    return (
      <Layout>
        {before && <BeforeWrapper size={size}>{before}</BeforeWrapper>}
        <span>{children}</span>
        {after && <AfterWrapper size={size}>{after}</AfterWrapper>}
      </Layout>
    );
  }

  render() {
    const { href, isDisabled } = this.props;
    if (href) {
      return (
        <LinkWrapper {...this.commonProps} {...this.linkProps}>
          {this.renderContent()}
        </LinkWrapper>
      );
    } else {
      const { ariaLabel = '', children } = this.props;
      let buttonLabel: string = ariaLabel;

      // infer the aria-label from children if possible
      if (!ariaLabel.length && typeof children === 'string') {
        buttonLabel = children;
      }

      return (
        <ButtonWrapper aria-label={buttonLabel} disabled={isDisabled} {...this.commonProps} {...this.buttonProps}>
          {this.renderContent()}
        </ButtonWrapper>
      );
    }
  }
}
