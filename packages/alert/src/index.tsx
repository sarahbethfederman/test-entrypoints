import * as React from 'react';
import { Wrapper, AlertVariant, IconWrapper, HeaderWrapper, HeadingWrapper, ContentWrapper } from './index.style';
import { Info, Success, Warn } from '@lendi-ui/icon';

export interface Props {
  variant: AlertVariant;
  heading?: string;
  children?: string;
}

const Alert = ({ variant, heading, children }: Props) => {
  let alertIcon;
  const withHeading = !!heading;
  switch (variant) {
    case 'error':
      alertIcon = <Warn color="error.500" />;
      break;
    case 'info':
      alertIcon = <Info color="info.500" />;
      break;
    case 'success':
      alertIcon = <Success color="success.500" />;
      break;
    case 'warn':
      alertIcon = <Warn color="warn.500" />;
      break;
  }
  if (withHeading) {
    return (
      <Wrapper variant={variant} withHeading={withHeading}>
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
    <Wrapper variant={variant} withHeading={withHeading}>
      <IconWrapper>{alertIcon}</IconWrapper>
      <ContentWrapper withHeading={withHeading} size="xs">
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Alert;
