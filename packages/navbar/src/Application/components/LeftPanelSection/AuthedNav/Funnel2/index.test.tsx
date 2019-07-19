import * as React from 'react';
import { mount } from 'enzyme';
import { FunnelTwoSection } from '.';
import { SidebarNav } from '../../../../../common/SidebarNav';
import Theme from '@lendi-ui/theme';
import { OLD_DASHBOARD_LINK, DASHBOARD_LINK } from '../../../../../constants/links';

const refinanceProps = {
  transactionType: 'Refinance',
  applicationSfid: '123',
  numberOfApplicants: 1,
  applicationNumber: 1,
};

const newPurchaseProps = {
  transactionType: 'New Purchase',
  applicationSfid: '123',
  numberOfApplicants: 1,
  applicationNumber: 1,
};

describe('Funnel2Nav', () => {
  it('should render lender nav item if application transaction type is refinance', () => {
    const wrapper = mount(
      <Theme>
        <FunnelTwoSection {...refinanceProps} />
      </Theme>
    );
    const navItem = wrapper.find(SidebarNav.Item);
    expect(navItem.get(0).props.children === 'Lender').toBeTruthy();
    expect(navItem.get(1).props.children === 'Property address').toBeTruthy();
    expect(navItem.get(2).props.children === 'Additional property').toBeTruthy();
    expect(navItem.get(3).props.children === 'Applicants').toBeTruthy();
  });

  it('should not render lender nav item if application transaction type is new purchase', () => {
    const wrapper = mount(
      <Theme>
        <FunnelTwoSection {...newPurchaseProps} />
      </Theme>
    );
    const navItem = wrapper.find(SidebarNav.Item);
    expect(navItem.get(0).props.children === 'Lender').toBeFalsy();
    expect(navItem.get(0).props.children === 'Property address').toBeTruthy();
    expect(navItem.get(1).props.children === 'Additional property').toBeTruthy();
    expect(navItem.get(2).props.children === 'Applicants').toBeTruthy();
  });

  it('applicant nav item should have the link to old dashboard when there is more than 2 applicants', () => {
    const props = {
      ...newPurchaseProps,
      numberOfApplicants: 3,
    };
    const wrapper = mount(
      <Theme>
        <FunnelTwoSection {...props} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    expect(navItems.get(2).props.children === 'Applicants').toBeTruthy();
    expect(
      navItems.get(2).props.href.includes(`${OLD_DASHBOARD_LINK}${newPurchaseProps.applicationNumber}/applicants`)
    ).toBeTruthy();
  });

  it('applicant nav item should have the link to new dashboard when there is 2 or less applicant', () => {
    const wrapper = mount(
      <Theme>
        <FunnelTwoSection {...newPurchaseProps} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    expect(navItems.get(2).props.children === 'Applicants').toBeTruthy();
    expect(
      navItems.get(2).props.href.includes(`${DASHBOARD_LINK}/${newPurchaseProps.applicationSfid}/applicant/primary`)
    ).toBeTruthy();
  });
});
