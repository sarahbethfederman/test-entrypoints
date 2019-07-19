import * as React from 'react';
import { PROPERTY_REPORT_LINK, REPAYMENT_CALCULATOR_LINK } from '../../../../../constants/links';
import { SidebarNav } from '../../../../../common/SidebarNav';
import { ListItem } from './index.style';

export interface ToolBoxSectionProps {
  params?: string;
}
export const ToolBoxSection = ({ params = '' }: ToolBoxSectionProps) => (
  <ListItem>
    <SidebarNav.Section title="Your toolbox">
      <SidebarNav.Item href={`${PROPERTY_REPORT_LINK}${params}`} labelText="Property report">
        Property report
      </SidebarNav.Item>
      <SidebarNav.Item href={`${REPAYMENT_CALCULATOR_LINK}${params}`} labelText="Repayments calculator">
        Repayments calculator
      </SidebarNav.Item>
    </SidebarNav.Section>
  </ListItem>
);
