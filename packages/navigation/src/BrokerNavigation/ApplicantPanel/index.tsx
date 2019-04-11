import * as React from 'react';
import {
  PanelWrapper,
  ApplicantOverline,
  LinkWrapper,
  Circle,
  ApplicantLink,
  SuccessIcon,
  WarnIcon,
} from './index.style';

export enum ProductProgress {
  contactdetails = 'contactdetails',
  personaldetails = 'personaldetails',
  employmentHistory = 'employmentHistory',
  eConsent = 'E-consent',
  empty = '',
}

export interface ApplicantState {
  contactDetails: boolean;
  personalDetails: boolean;
  employmentHistory: boolean;
  eConsent: boolean;
}

export interface ApplicantPanelProps {
  applicantName: string;
  applicantState: ApplicantState;
  productProgress?: ProductProgress;
  clickLink: (productProgress: ProductProgress) => void;
}

export const ApplicantPanel = ({
  applicantName,
  applicantState,
  productProgress = ProductProgress.empty,
  clickLink,
}: ApplicantPanelProps) => (
  <PanelWrapper>
    <ApplicantOverline size="md" colorScheme="light">
      {applicantName}
      {applicantState.contactDetails &&
      applicantState.personalDetails &&
      applicantState.employmentHistory &&
      applicantState.eConsent ? (
        <SuccessIcon color="success.500" />
      ) : (
        <WarnIcon color="warn.500" />
      )}
    </ApplicantOverline>
    <LinkWrapper>
      {productProgress === ProductProgress.contactdetails ? <Circle /> : null}
      <ApplicantLink
        size="md"
        color={productProgress === ProductProgress.contactdetails ? 'secondary.500' : 'shade.700'}
        onClick={() => clickLink(ProductProgress.contactdetails)}
      >
        Contact details
      </ApplicantLink>
      {applicantState ? <SuccessIcon color="success.500" /> : <WarnIcon color="warn.500" />}
    </LinkWrapper>
    <LinkWrapper>
      {productProgress === ProductProgress.personaldetails ? <Circle /> : null}
      <ApplicantLink
        size="md"
        color={productProgress === ProductProgress.personaldetails ? 'secondary.500' : 'shade.700'}
        onClick={() => clickLink(ProductProgress.personaldetails)}
      >
        Personal details
      </ApplicantLink>
      {applicantState ? <SuccessIcon color="success.500" /> : <WarnIcon color="warn.500" />}
    </LinkWrapper>
    <LinkWrapper>
      {productProgress === ProductProgress.employmentHistory ? <Circle /> : null}
      <ApplicantLink
        size="md"
        color={productProgress === ProductProgress.employmentHistory ? 'secondary.500' : 'shade.700'}
        onClick={() => clickLink(ProductProgress.employmentHistory)}
      >
        3y employment history & income
      </ApplicantLink>
      {applicantState ? <SuccessIcon color="success.500" /> : <WarnIcon color="warn.500" />}
    </LinkWrapper>
    <LinkWrapper>
      {productProgress === ProductProgress.eConsent ? <Circle /> : null}
      <ApplicantLink
        size="md"
        color={productProgress === ProductProgress.eConsent ? 'secondary.500' : 'shade.700'}
        onClick={() => clickLink(ProductProgress.eConsent)}
      >
        E-consent
      </ApplicantLink>
      {applicantState ? <SuccessIcon color="success.500" /> : <WarnIcon color="warn.500" />}
    </LinkWrapper>
  </PanelWrapper>
);
