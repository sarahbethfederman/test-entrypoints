import * as React from 'react';
import { SidebarNav } from './../../../SidebarNav';
import { OLD_DASHBOARD_LINK, DASHBOARD_LINK } from './../../../constants/links';

export interface ApplicantDetails {
  applicant_type?: string;
  first_name?: string;
  sfid?: string;
  uuid?: string;
}

interface Funnel3Item {
  applicationSfid?: string;
  applicants?: ApplicantDetails[];
  applicationNumber?: number;
}

interface Funnel3ItemByApplicant {
  applicantSfid?: string;
  applicationSfid?: string;
  groupLabel?: string;
  numberOfApplicants?: number;
  applicationNumber?: number;
}

export const FunnelThreeNav = ({
  applicationSfid,
  applicantSfid,
  groupLabel,
  numberOfApplicants = 0,
  applicationNumber,
}: Funnel3ItemByApplicant) => {
  let assetLink = `${DASHBOARD_LINK}/${applicationSfid}/vehicle/${applicantSfid}/`;
  let incomeLink = `${DASHBOARD_LINK}/${applicationSfid}/employment-type/${applicantSfid}/`;

  if (numberOfApplicants > 2) {
    assetLink = `${OLD_DASHBOARD_LINK}/application${applicationNumber}/assets_and_liabilities/`;
    incomeLink = `${OLD_DASHBOARD_LINK}/application${applicationNumber}/income_and_expense/`;
  }

  return (
    <SidebarNav.Group title={groupLabel}>
      <SidebarNav.Item href={assetLink}>Assets and liabilities</SidebarNav.Item>
      <SidebarNav.Item href={incomeLink}>Income and expenses</SidebarNav.Item>
    </SidebarNav.Group>
  );
};

export const FunnelThreeSection = ({ applicants = [], applicationSfid, applicationNumber }: Funnel3Item) => {
  if (applicants.length === 1) {
    return (
      <FunnelThreeNav
        applicantSfid={applicants[0].sfid}
        applicationSfid={applicationSfid}
        groupLabel="Your financials"
      />
    );
  }

  if (applicants.length) {
    return (
      <div>
        {applicants.map((applicant, index) => {
          let groupLabel = 'Your financials';
          if (index > 0) {
            groupLabel = applicant.first_name
              ? `${applicant.first_name}'s financials`
              : `Applicant ${index + 1}'s financials`;
          }
          return (
            <FunnelThreeNav
              key={index}
              applicantSfid={applicants[0].sfid}
              applicationSfid={applicationSfid}
              groupLabel={groupLabel}
              numberOfApplicants={applicants.length}
              applicationNumber={applicationNumber}
            />
          );
        })}
      </div>
    );
  }
  return null;
};
