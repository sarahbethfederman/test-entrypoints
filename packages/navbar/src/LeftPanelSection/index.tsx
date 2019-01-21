import * as React from 'react';
import { UnauthedNav } from './UnauthedNav';
import { AuthedNav } from './AuthedNav';
import { Application, Applicant } from './../types';

export interface LeftPanelSectionProps {
  isAuthenticated?: boolean;
  application?: Application;
  applicants?: Applicant[];
}

export const LeftPanelSection = ({ isAuthenticated, application, applicants }: LeftPanelSectionProps) => {
  if (isAuthenticated && application) {
    const { stage, sfid, type, number } = application;
    return (
      <AuthedNav
        applicationStage={stage}
        applicationSfid={sfid}
        transactionType={type}
        applicants={applicants}
        applicationNumber={number}
      />
    );
  }

  // user who has an account but doesn't have any application/opportunity yet
  if (isAuthenticated && !application) {
    return <AuthedNav />;
  }
  return <UnauthedNav />;
};
