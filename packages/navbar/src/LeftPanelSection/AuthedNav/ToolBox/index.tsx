import * as React from 'react';
import { PROPERTY_REPORT_LINK, REPAYMENT_CALCULATOR_LINK } from './../../../constants/links';
import { SidebarNav } from './../../../SidebarNav';

export const ToolBoxSection = () => (
  <SidebarNav.Section title="Your toolbox">
    <SidebarNav.Item href={PROPERTY_REPORT_LINK}>Property report</SidebarNav.Item>
    <SidebarNav.Item href={REPAYMENT_CALCULATOR_LINK}>Repayments calculator</SidebarNav.Item>
  </SidebarNav.Section>
);
