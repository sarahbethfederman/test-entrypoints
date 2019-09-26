import * as React from 'react';
import { deriveSize, getDataProps, LUIGlobalProps } from '@lendi-ui/utils';
import { IconButtonSize, IconButtonWrapper, LinkWrapper } from './index.style';
import Spinner from '@lendi-ui/spinner';
import { Colors } from '@lendi-ui/theme';

export { IconButtonSize };

export interface IconProps {
  color: Colors;
  width?: string;
  height?: string;
  className?: string;
}

export interface IconButtonProps extends LUIGlobalProps {
  color?: Colors;
  href?: string;
  isDisabled?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  size?: IconButtonSize;
  icon: React.FunctionComponent<IconProps>;
  isLoading?: boolean;
}

export class IconButton extends React.Component<IconButtonProps> {
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

  getIconSize = (size: IconButtonSize) => {
    switch (size) {
      case 'xs':
        return deriveSize(1);
      case 'sm':
        return deriveSize(1.25);
      case 'md':
        return deriveSize(1.5);
      case 'lg':
        return deriveSize(2);
      default:
        return undefined;
    }
  };

  render() {
    const {
      isLoading = false,
      href,
      color = 'primary.500',
      size = 'md',
      isDisabled,
      icon,
      onClick,
      ...otherProps
    } = this.props;
    const Icon = isLoading ? Spinner : (this.props.icon as React.FunctionComponent<IconProps>);
    const iconSize = this.getIconSize(size);
    if (href) {
      return (
        <LinkWrapper onClick={this.handleLinkClick} size={size} disabled={isDisabled} href={href} {...otherProps}>
          <Icon color="primary.500" height={iconSize} width={iconSize} />
        </LinkWrapper>
      );
    } else {
      return (
        <IconButtonWrapper
          onClick={onClick}
          size={size}
          disabled={isDisabled || isLoading}
          {...getDataProps(this.props)}
          {...otherProps}
        >
          <Icon color={color} height={iconSize} width={iconSize} />
        </IconButtonWrapper>
      );
    }
  }
}
