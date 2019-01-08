import * as React from 'react';
import { SidebarNav } from './../../../SidebarNav';
import { OLD_DASHBOARD_LINK, DASHBOARD_LINK } from './../../../constants/links';

export interface Funnel2Item {
  transactionType?: string;
  applicationSfid?: string;
  numberOfApplicants?: number;
  applicationNumber?: number;
}

export const FunnelTwoSection = ({
  transactionType,
  applicationSfid,
  numberOfApplicants = 0,
  applicationNumber,
}: Funnel2Item) => {
  const propertyLink = `${DASHBOARD_LINK}/${applicationSfid}/property/`;
  const additionalPropertyLink = `${DASHBOARD_LINK}/${applicationSfid}/additional-properties/`;
  const applicantLink =
    numberOfApplicants > 2
      ? `${OLD_DASHBOARD_LINK}${applicationNumber}/applicants/`
      : `${DASHBOARD_LINK}/${applicationSfid}/applicant/primary/`;
  if (transactionType === 'Refinance') {
    return (
      <div>
        <SidebarNav.Group title="Property">
          <SidebarNav.Item href={`${DASHBOARD_LINK}/${applicationSfid}/lender/lender_name/`}>Lender</SidebarNav.Item>
          <SidebarNav.Item href={propertyLink}>Property address</SidebarNav.Item>
          <SidebarNav.Item href={additionalPropertyLink}>Additional property</SidebarNav.Item>
        </SidebarNav.Group>
        <SidebarNav.Item href={applicantLink}>Applicants</SidebarNav.Item>
      </div>
    );
  }

  return (
    <div>
      <SidebarNav.Group title="Property">
        <SidebarNav.Item href={propertyLink}>Property address</SidebarNav.Item>
        <SidebarNav.Item href={additionalPropertyLink}>Additional property</SidebarNav.Item>
      </SidebarNav.Group>
      <SidebarNav.Item href={applicantLink}>Applicants</SidebarNav.Item>
    </div>
  );
};
