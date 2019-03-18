import * as React from 'react';
import { Wrapper, StatusBadgeVariant, StatusBadgeSize, IconWrapper, ContentWrapper } from './index.style';
import { InfoTwo, SuccessTwo, WarnTwo } from '@lendi-ui/icon';

export interface Props {
  variant: StatusBadgeVariant;
  size?: StatusBadgeSize;
  hasIcon?: boolean;
  statusText?: string;
}

const StatusBadge = ({ variant, hasIcon = false, statusText, size = 'sm' }: Props) => {
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
      badgeIcon = <SuccessTwo color="success.500" height={iconHeight} />;
      break;
    case 'warn':
      badgeIcon = <WarnTwo color="warn.500" height={iconHeight} />;
      break;
  }
  return (
    <Wrapper variant={variant} withIcon={withIcon}>
      {withIcon && <IconWrapper>{badgeIcon}</IconWrapper>}
      <ContentWrapper size={size}>{statusText}</ContentWrapper>
    </Wrapper>
  );
};

export default StatusBadge;
