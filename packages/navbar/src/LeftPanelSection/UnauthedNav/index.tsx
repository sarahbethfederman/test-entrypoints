import * as React from 'react';
import { SidebarNav } from './../../SidebarNav';
import {
  SEARCH_LOAN_LINK,
  BUY_PROPERTY_LINK,
  REFINANCE_LANDING_PAGE_LINK,
  PROPERTY_REPORT_LINK,
  GUIDE_PAGE_LINK,
  INSPIRE_PAGE_LINK,
  CALCULATORS_PAGE_LINK,
} from './../../constants/links';

export const UnauthedNav = () => (
  <SidebarNav.Section>
    <SidebarNav.Item href={SEARCH_LOAN_LINK}>Discover loan options</SidebarNav.Item>
    <SidebarNav.Item href={BUY_PROPERTY_LINK}>Buying a property</SidebarNav.Item>
    <SidebarNav.Item href={REFINANCE_LANDING_PAGE_LINK}>Refinance your home loan</SidebarNav.Item>
    <SidebarNav.Item href={PROPERTY_REPORT_LINK}>Free property reports</SidebarNav.Item>
    <SidebarNav.Item href={GUIDE_PAGE_LINK}>Home loans explained</SidebarNav.Item>
    <SidebarNav.Item href={INSPIRE_PAGE_LINK}>Get inspired</SidebarNav.Item>
    <SidebarNav.Item href={CALCULATORS_PAGE_LINK}>Home loan calculators</SidebarNav.Item>
  </SidebarNav.Section>
);
