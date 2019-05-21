import * as React from 'react';
import * as Fragment from 'react-dot-fragment';
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
      <Fragment>
        <SidebarNav.Group title="Property">
          <SidebarNav.Item href={`${DASHBOARD_LINK}/${applicationSfid}/lender/lender_name/`} labelText="lender">
            Lender
          </SidebarNav.Item>
          <SidebarNav.Item href={propertyLink} labelText="Property address">
            Property address
          </SidebarNav.Item>
          <SidebarNav.Item href={additionalPropertyLink} labelText="Additional property">
            Additional property
          </SidebarNav.Item>
        </SidebarNav.Group>
        <SidebarNav.Item href={applicantLink} labelText="Applicants">
          Applicants
        </SidebarNav.Item>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <SidebarNav.Group title="Property">
        <SidebarNav.Item href={propertyLink} labelText="Property address">
          Property address
        </SidebarNav.Item>
        <SidebarNav.Item href={additionalPropertyLink} labelText="Additional address">
          Additional property
        </SidebarNav.Item>
      </SidebarNav.Group>
      <SidebarNav.Item href={applicantLink} labelText="Applicants">
        Applicants
      </SidebarNav.Item>
    </Fragment>
  );
};
