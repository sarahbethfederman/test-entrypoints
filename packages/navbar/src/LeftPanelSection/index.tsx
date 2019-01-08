import * as React from 'react';
import { UnauthedNav } from './UnauthedNav';
import { AuthedNav } from './AuthedNav';
import { Application } from './../types';

export interface LeftPanelSectionProps {
  isAuthenticated?: boolean;
  application?: Application;
}

export const LeftPanelSection = ({ isAuthenticated, application }: LeftPanelSectionProps) => {
  if (isAuthenticated && application) {
    const { stage, sfid, type, applicants, number } = application;
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
  return <UnauthedNav />;
};
