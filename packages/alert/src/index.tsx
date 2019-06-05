import * as React from 'react';
import { Wrapper, AlertVariant, IconWrapper, HeaderWrapper, HeadingWrapper, ContentWrapper } from './index.style';
import { Info, CheckCircleOutline, ErrorOutline } from '@lendi-ui/icon';
import { LUIGlobalProps } from '@lendi-ui/utils';

export interface AlertProps extends LUIGlobalProps {
  variant: AlertVariant;
  heading?: string;
  children?: string;
}

const Alert = ({ variant, heading, children, ...otherProps }: AlertProps) => {
  let alertIcon;
  const withHeading = !!heading;
  switch (variant) {
    case 'error':
      alertIcon = <ErrorOutline color="error.500" />;
      break;
    case 'info':
      alertIcon = <Info color="info.500" />;
      break;
    case 'success':
      alertIcon = <CheckCircleOutline color="success.500" />;
      break;
    case 'warn':
      alertIcon = <ErrorOutline color="warn.500" />;
      break;
  }
  if (withHeading) {
    return (
      <Wrapper variant={variant} withHeading={withHeading} {...otherProps}>
        <HeaderWrapper>
          <IconWrapper>{alertIcon}</IconWrapper>
          <HeadingWrapper size="sm">
            <strong>{heading}</strong>
          </HeadingWrapper>
        </HeaderWrapper>
        <ContentWrapper withHeading={withHeading} size="xs">
          {children}
        </ContentWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper variant={variant} withHeading={withHeading} {...otherProps}>
      <IconWrapper>{alertIcon}</IconWrapper>
      <ContentWrapper withHeading={withHeading} size="xs">
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Alert;
