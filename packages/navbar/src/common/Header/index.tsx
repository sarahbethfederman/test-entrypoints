import * as React from 'react';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { HeaderButton, ApplicationStatusButton } from './index.style';
import { SIGN_UP_LINK, SEARCH_LOAN_LINK } from '../../constants/links';

export interface ButtonVariationProps {
  isAuthenticated?: boolean;
  continueApplicationUrl?: string;
  params?: string;
  context?: any;
}
export const ButtonVariation = ({
  isAuthenticated = false,
  continueApplicationUrl = '',
  params = '',
  context,
}: ButtonVariationProps) => {
  if (!isAuthenticated) {
    return (
      <HeaderButton
        size="sm"
        variant="secondary"
        href={`${SIGN_UP_LINK}${params}`}
        onClick={() => {
          context.analyticsForNavigation('Log in / Sign up', WindowPosition.header);
        }}
      >
        Log in / Sign up
      </HeaderButton>
    );
  }

  if (!continueApplicationUrl) {
    return (
      <ApplicationStatusButton
        size="sm"
        variant="emphasis"
        href={`${SEARCH_LOAN_LINK}${params}`}
        onClick={() => {
          context.analyticsForNavigation('Start application', WindowPosition.header);
        }}
      >
        Start application
      </ApplicationStatusButton>
    );
  }

  return (
    <ApplicationStatusButton
      size="sm"
      variant="emphasis"
      href={`${continueApplicationUrl}${params}`}
      onClick={() => {
        context.analyticsForNavigation('Continue application', WindowPosition.header);
      }}
    >
      Continue application
    </ApplicationStatusButton>
  );
};
