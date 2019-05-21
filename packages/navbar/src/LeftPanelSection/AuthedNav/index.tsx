import * as React from 'react';
import { APPLICATION_STAGES } from './../../constants/application-stages';
import { SEARCH_LOAN_LINK, MANAGE_APPLICATION_LINK, PROPERTY_REPORT_LINK } from './../../constants/links';
import { SidebarNav } from './../../SidebarNav';
import { ToolBoxSection } from './ToolBox';
import { FunnelTwoSection } from './Funnel2';
import { FunnelThreeSection } from './Funnel3';
import { Applicant } from '../../types';

interface AuthedNavDetails {
  applicationStage?: string;
  applicants?: Applicant[];
  applicationSfid?: string;
  transactionType?: string;
  applicationNumber?: number;
}

export const AuthedNav = ({
  applicationStage,
  applicants = [],
  applicationSfid,
  transactionType,
  applicationNumber,
}: AuthedNavDetails) => {
  const primaryApplicant = applicants.find((applicant) => applicant.type === 'primary');
  const primaryApplicantSfid = (primaryApplicant && primaryApplicant.sfid) || '';
  const numberOfApplicants = applicants.length;

  let profileLink = `/home-loans/search/new-home-loan/security_value/?id=${applicationSfid}/`;
  if (transactionType === 'Refinance') {
    profileLink = `/home-loans/search/refinance/loan_value/?id=${applicationSfid}/`;
  }
  const dashOverviewLink = `/dashboard/application/${applicationSfid}/overview/${primaryApplicantSfid}/`;
  const documentLink = `/dashboard/applications/application${applicationNumber}/documents/`;
  const verifyIdLink = `/dashboard/application/${applicationSfid}/id-verification/${primaryApplicantSfid}/`;
  const summaryLink = `/dashboard/applications/application${applicationNumber}/new-loan-summary/`;
  const lenderSelectionLink = `/dashboard/applications/application${applicationNumber}/lender-selection/`;
  switch (applicationStage) {
    case APPLICATION_STAGES[0]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink} labelText="Your profile">
            Your profile
          </SidebarNav.Item>
          <FunnelTwoSection
            applicationSfid={applicationSfid}
            transactionType={transactionType}
            numberOfApplicants={numberOfApplicants}
            applicationNumber={applicationNumber}
          />
          <ToolBoxSection />
        </SidebarNav.Section>
      );
    }
    case APPLICATION_STAGES[1]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink} labelText="Your profile">
            Your profile
          </SidebarNav.Item>
          <FunnelTwoSection
            applicationSfid={applicationSfid}
            transactionType={transactionType}
            numberOfApplicants={numberOfApplicants}
            applicationNumber={applicationNumber}
          />
          <FunnelThreeSection
            applicants={applicants}
            applicationSfid={applicationSfid}
            applicationNumber={applicationNumber}
          />
          <SidebarNav.Item href={verifyIdLink} labelText="Verify your ID">
            Verify your ID
          </SidebarNav.Item>
          <SidebarNav.Item href={documentLink} labelText="Upload your documents">
            Upload your documents
          </SidebarNav.Item>
          <SidebarNav.Item href={dashOverviewLink} labelText="Your dashboard">
            Your dashboard
          </SidebarNav.Item>
          <ToolBoxSection />
        </SidebarNav.Section>
      );
    }
    case APPLICATION_STAGES[2]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink} labelText="Your profile">
            Your profile
          </SidebarNav.Item>
          <FunnelTwoSection
            applicationSfid={applicationSfid}
            transactionType={transactionType}
            numberOfApplicants={numberOfApplicants}
            applicationNumber={applicationNumber}
          />
          <FunnelThreeSection
            applicants={applicants}
            applicationSfid={applicationSfid}
            applicationNumber={applicationNumber}
          />
          <SidebarNav.Item href={verifyIdLink} labelText="Verify your ID">
            Verify your ID
          </SidebarNav.Item>
          <SidebarNav.Item href={summaryLink} labelText="View your summary">
            View your summary
          </SidebarNav.Item>
          <SidebarNav.Item href={lenderSelectionLink} labelText="Choose your loan">
            Choose your loan
          </SidebarNav.Item>
          <SidebarNav.Item href={documentLink} labelText="Upload your documents">
            Upload your documents
          </SidebarNav.Item>
          <SidebarNav.Item href={dashOverviewLink} labelText="Your dashboard">
            Your dashboard
          </SidebarNav.Item>
          <ToolBoxSection />
        </SidebarNav.Section>
      );
    }
    default: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={SEARCH_LOAN_LINK} labelText="Start a new loan">
            Start a new loan
          </SidebarNav.Item>
          <SidebarNav.Item href={MANAGE_APPLICATION_LINK} labelText="My dashboard">
            My dashboard
          </SidebarNav.Item>
          <SidebarNav.Item href={PROPERTY_REPORT_LINK} labelText="My property reports">
            My property reports
          </SidebarNav.Item>
        </SidebarNav.Section>
      );
    }
  }
};
