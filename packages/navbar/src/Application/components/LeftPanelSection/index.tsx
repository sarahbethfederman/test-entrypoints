import * as React from 'react';
import { UnauthedNav } from './UnauthedNav';
import { AuthedNav } from './AuthedNav';
import { Application, Applicant } from '../../../common/types';

export interface LeftPanelSectionProps {
  isAuthenticated?: boolean;
  application?: Application;
  applicants?: Applicant[];
  params?: string;
}

export const LeftPanelSection = ({ isAuthenticated, application, applicants, params = '' }: LeftPanelSectionProps) => {
  if (isAuthenticated && application) {
    const { stage, sfid, type, number } = application;
    return (
      <AuthedNav
        applicationStage={stage}
        applicationSfid={sfid}
        transactionType={type}
        applicants={applicants}
        applicationNumber={number}
        params={params}
      />
    );
  }

  // user who has an account but doesn't have any application/opportunity yet
  if (isAuthenticated && !application) {
    return <AuthedNav params={params} />;
  }
  return <UnauthedNav params={params} />;
};
