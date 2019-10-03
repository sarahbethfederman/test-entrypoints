import * as React from 'react';
import { getDataProps, LUIGlobalProps } from '@lendi-ui/utils';
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

export type ButtonType = 'submit' | 'button' | 'reset';

export interface ButtonProps extends LUIGlobalProps {
  ariaLabel?: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  isInverse?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
}
export class Button extends React.Component<ButtonProps> {
  get commonProps() {
    const { variant, size = 'md', isInverse, isFullWidth, isDisabled, className, onClick } = this.props;
    return {
      variant,
      size,
      isInverse,
      isFullWidth,
      isDisabled,
      className,
      onClick,
    };
  }

  get linkProps() {
    const { href } = this.props;
    return {
      href,
    };
  }

  renderContent() {
    const { size = 'md', before, after, children } = this.props;
    return (
      <Layout>
        <BeforeWrapper size={size}>{before}</BeforeWrapper>
        <span>{children}</span>
        <AfterWrapper size={size}>{after}</AfterWrapper>
      </Layout>
    );
  }

  handleLinkClick = (event: React.SyntheticEvent) => {
    const { isDisabled, onClick } = this.props;
    if (isDisabled) {
      event.preventDefault();
    } else {
      if (onClick) {
        onClick(event);
      }
    }
  };

  render() {
    const { href, isDisabled, type = 'button', ...otherProps } = this.props;
    if (href) {
      return (
        <LinkWrapper {...otherProps} {...this.commonProps} {...this.linkProps} onClick={this.handleLinkClick}>
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
        <ButtonWrapper
          aria-label={buttonLabel}
          disabled={isDisabled}
          type={type}
          {...getDataProps(this.props)}
          {...this.commonProps}
          {...otherProps}
        >
          {this.renderContent()}
        </ButtonWrapper>
      );
    }
  }
}
