import * as React from 'react';
import { APPLICATION_STAGES } from './../../constants/application-stages';
import { SEARCH_LOAN_LINK, MANAGE_APPLICATION_LINK, PROPERTY_REPORT_LINK } from './../../constants/links';
import { SidebarNav } from './../../SidebarNav';
import { ToolBoxSection } from './ToolBox';
import { FunnelTwoSection } from './Funnel2';
import { FunnelThreeSection, ApplicantDetails } from './Funnel3';

interface AuthedNavDetails {
  applicationStage?: string;
  applicants?: ApplicantDetails[];
  applicationSfid?: string;
  transactionType?: string;
  applicationNumber?: number;
}

export const AuthedNav = ({
  applicationStage = APPLICATION_STAGES[0],
  applicants = [],
  applicationSfid,
  transactionType,
  applicationNumber,
}: AuthedNavDetails) => {
  const primaryApplicant = applicants.find((applicant) => applicant.applicant_type === 'primary');
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
          <SidebarNav.Item href={SEARCH_LOAN_LINK}>Start a new loan</SidebarNav.Item>
          <SidebarNav.Item href={MANAGE_APPLICATION_LINK}>My dashboard</SidebarNav.Item>
          <SidebarNav.Item href={PROPERTY_REPORT_LINK}>My property reports</SidebarNav.Item>
        </SidebarNav.Section>
      );
    }
    case APPLICATION_STAGES[1]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink}>Your profile</SidebarNav.Item>
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
    case APPLICATION_STAGES[2]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink}>Your profile</SidebarNav.Item>
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
          <SidebarNav.Item href={verifyIdLink}>Verify your ID</SidebarNav.Item>
          <SidebarNav.Item href={documentLink}>Upload your documents</SidebarNav.Item>
          <SidebarNav.Item href={dashOverviewLink}>Your dashboard</SidebarNav.Item>
          <ToolBoxSection />
        </SidebarNav.Section>
      );
    }
    case APPLICATION_STAGES[3]: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={profileLink}>Your profile</SidebarNav.Item>
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
          <SidebarNav.Item href={verifyIdLink}>Verify your ID</SidebarNav.Item>
          <SidebarNav.Item href={summaryLink}>View your summary</SidebarNav.Item>
          <SidebarNav.Item href={lenderSelectionLink}>Choose your loan</SidebarNav.Item>
          <SidebarNav.Item href={documentLink}>Upload your documents</SidebarNav.Item>
          <SidebarNav.Item href={dashOverviewLink}>Your dashboard</SidebarNav.Item>
          <ToolBoxSection />
        </SidebarNav.Section>
      );
    }
    default: {
      return (
        <SidebarNav.Section>
          <SidebarNav.Item href={SEARCH_LOAN_LINK}>Start a new loan</SidebarNav.Item>
          <SidebarNav.Item href={MANAGE_APPLICATION_LINK}>My dashboard</SidebarNav.Item>
          <SidebarNav.Item href={PROPERTY_REPORT_LINK}>My property reports</SidebarNav.Item>
        </SidebarNav.Section>
      );
    }
  }
};
