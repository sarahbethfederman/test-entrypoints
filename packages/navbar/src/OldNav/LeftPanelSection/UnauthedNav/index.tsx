import * as React from 'react';
import { SidebarNav } from '../../../common/SidebarNav';
import {
  SEARCH_LOAN_LINK,
  BUY_PROPERTY_LINK,
  REFINANCE_LANDING_PAGE_LINK,
  PROPERTY_REPORT_LINK,
  GUIDE_PAGE_LINK,
  INSPIRE_PAGE_LINK,
  CALCULATORS_PAGE_LINK,
} from '../../../constants/links';

export interface UnauthedNavProps {
  params?: string;
}

export const UnauthedNav = ({ params = '' }: UnauthedNavProps) => (
  <SidebarNav.Section>
    <SidebarNav.Item href={`${SEARCH_LOAN_LINK}${params}`} labelText="Discover loan options">
      Discover loan options
    </SidebarNav.Item>
    <SidebarNav.Item href={`${BUY_PROPERTY_LINK}${params}`} labelText="Buying a property">
      Buying a property
    </SidebarNav.Item>
    <SidebarNav.Item href={`${REFINANCE_LANDING_PAGE_LINK}${params}`} labelText="Refinance your home loan">
      Refinance your home loan
    </SidebarNav.Item>
    <SidebarNav.Item href={`${PROPERTY_REPORT_LINK}${params}`} labelText="Free property reports">
      Free property reports
    </SidebarNav.Item>
    <SidebarNav.Item href={`${GUIDE_PAGE_LINK}${params}`} labelText="Home loans explained">
      Home loans explained
    </SidebarNav.Item>
    <SidebarNav.Item href={`${INSPIRE_PAGE_LINK}${params}`} labelText="Get inspired">
      Get inspired
    </SidebarNav.Item>
    <SidebarNav.Item href={`${CALCULATORS_PAGE_LINK}${params}`} labelText="Home loan calculators">
      Home loan calculators
    </SidebarNav.Item>
  </SidebarNav.Section>
);
