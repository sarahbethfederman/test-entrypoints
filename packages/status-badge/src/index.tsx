import * as React from 'react';
import { Wrapper, StatusBadgeVariant, StatusBadgeSize, IconWrapper, ContentWrapper } from './index.style';
import { InfoTwo, Check, WarnTwo } from '@lendi-ui/icon';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface StatusBadgeProps extends LUIGlobalProps {
  variant: StatusBadgeVariant;
  size?: StatusBadgeSize;
  hasIcon?: boolean;
  statusText?: string;
}

const StatusBadge = ({ variant, hasIcon = false, statusText, size = 'sm', ...otherProps }: StatusBadgeProps) => {
  let badgeIcon;
  const withIcon = !!hasIcon;
  const iconHeight = size === 'lg' ? '1.5em' : '1em';
  switch (variant) {
    case 'error':
      badgeIcon = <WarnTwo color="error.500" height={iconHeight} />;
      break;
    case 'info':
      badgeIcon = <InfoTwo color="info.500" height={iconHeight} />;
      break;
    case 'success':
      badgeIcon = <Check color="success.500" height={iconHeight} />;
      break;
    case 'warn':
      badgeIcon = <WarnTwo color="warn.500" height={iconHeight} />;
      break;
  }
  return (
    <Wrapper variant={variant} withIcon={withIcon} {...otherProps}>
      {withIcon && <IconWrapper>{badgeIcon}</IconWrapper>}
      <ContentWrapper size={size}>{statusText}</ContentWrapper>
    </Wrapper>
  );
};

export default StatusBadge;
