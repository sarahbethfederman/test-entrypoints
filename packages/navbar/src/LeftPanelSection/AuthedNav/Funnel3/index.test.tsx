import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { FunnelThreeSection, FunnelThreeNav } from '.';
import Theme from '@lendi-ui/theme';
import { SidebarNav } from './../../../SidebarNav';
import { DASHBOARD_LINK, OLD_DASHBOARD_LINK } from './../../../constants/links';

const oneApplicantProps = {
  applicants: [
    {
      sfid: '111',
    },
  ],
  applicantionSfid: '123',
  applicationNumber: 1,
};

const twoApplicantProps = {
  applicants: [
    {
      sfid: '111',
    },
    {
      sfid: '111',
    },
  ],
  applicantionSfid: '123',
  applicationNumber: 1,
};

const navItemProps = {
  applicationSfid: '123',
  applicantSfid: '111',
  groupLabel: 'Something',
  numberOfApplicants: 1,
  applicationNumber: 1,
};

describe('Funnel3Nav', () => {
  it('should render one funnel3 nav group if there is one applicant', () => {
    const wrapper = shallow(<FunnelThreeSection {...oneApplicantProps} />);
    expect(wrapper.find(FunnelThreeNav)).toHaveLength(1);
  });

  it('should render number of funnel3 group according to applicants number', () => {
    const wrapper = shallow(<FunnelThreeSection {...twoApplicantProps} />);
    expect(wrapper.find(FunnelThreeNav)).toHaveLength(2);
  });

  it('All the links should redirect to the old dashboard if there is more than 2 applicants', () => {
    const props = {
      ...navItemProps,
      numberOfApplciants: 3,
    };
    const wrapper = mount(
      <Theme>
        <FunnelThreeNav {...props} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    const newFunnelAssetLink = `${OLD_DASHBOARD_LINK}/application${props.applicationNumber}/assets_and_liabilities/`;
    const newFunnelIncomeLink = `${OLD_DASHBOARD_LINK}/application${props.applicationNumber}/income_and_expense/`;
    expect(navItems.get(0).props.href.includes(newFunnelAssetLink));
    expect(navItems.get(1).props.href.includes(newFunnelIncomeLink));
  });

  it('All the links should redirect to the new dashboard if there is two or less applicants', () => {
    const wrapper = mount(
      <Theme>
        <FunnelThreeNav {...navItemProps} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    const newFunnelAssetLink = `${DASHBOARD_LINK}/${navItemProps.applicationSfid}/vehicle/${
      navItemProps.applicantSfid
    }/`;
    const newFunnelIncomeLink = `${DASHBOARD_LINK}/${navItemProps.applicationSfid}/employment-type/${
      navItemProps.applicantSfid
    }/`;
    expect(navItems.get(0).props.href.includes(newFunnelAssetLink));
    expect(navItems.get(1).props.href.includes(newFunnelIncomeLink));
  });
});
