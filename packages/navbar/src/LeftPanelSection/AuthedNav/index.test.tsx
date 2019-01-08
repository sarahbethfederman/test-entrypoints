import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { AuthedNav } from '.';
import { SidebarNav } from './../../SidebarNav';
import { APPLICATION_STAGES } from './../../constants/application-stages';
import Theme from '@lendi-ui/theme';
import { ToolBoxSection } from './ToolBox';
import { FunnelTwoSection } from './Funnel2';
import { FunnelThreeSection } from './Funnel3';

const applicationDetails = {
  applicationSfid: 'aaabbb111',
  transactionType: 'New Purchase',
  numberOfApplicants: 1,
  applicationNumber: 2,
};

describe('Authed Left Nav', () => {
  it('should render start new loan nav item if application stage is not specify', () => {
    const wrapper = shallow(<AuthedNav />);
    const firstNavItem = wrapper
      .find(SidebarNav.Item)
      .first()
      .props();
    expect(firstNavItem.children === 'Start a new loan').toBeTruthy();
    expect(firstNavItem.href && firstNavItem.href.includes('/home-loans/search')).toBeTruthy();
  });

  it('should render start new loan nav item if user has no application', () => {
    const wrapper = shallow(<AuthedNav applicationStage={APPLICATION_STAGES[0]} />);
    const firstNavItem = wrapper
      .find(SidebarNav.Item)
      .first()
      .props();
    expect(firstNavItem.children === 'Start a new loan').toBeTruthy();
    expect(firstNavItem.href && firstNavItem.href.includes('/home-loans/search')).toBeTruthy();
  });

  it('should render profile, funnel2 and toolbox nav items if user has started application', () => {
    const wrapper = mount(
      <Theme>
        <AuthedNav {...applicationDetails} applicationStage={APPLICATION_STAGES[1]} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    const firstNavItem = navItems.first().props();
    const toolBoxNav = wrapper.find(ToolBoxSection);
    const funnel2Nav = wrapper.find(FunnelTwoSection);
    expect(firstNavItem.children === 'Your profile').toBeTruthy();
    expect(firstNavItem.href && firstNavItem.href.includes('/home-loans/search')).toBeTruthy();
    expect(funnel2Nav).toHaveLength(1);
    expect(toolBoxNav).toHaveLength(1);
  });

  it('should render profile, funnel2, funnel3 and toolbox nav items if user finished funnel2', () => {
    const wrapper = mount(
      <Theme>
        <AuthedNav {...applicationDetails} applicationStage={APPLICATION_STAGES[2]} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    const firstNavItem = navItems.first().props();
    const toolBoxNav = wrapper.find(ToolBoxSection);
    const funnel2Nav = wrapper.find(FunnelTwoSection);
    const funnel3Nav = wrapper.find(FunnelThreeSection);
    expect(firstNavItem.children === 'Your profile').toBeTruthy();
    expect(firstNavItem.href && firstNavItem.href.includes('/home-loans/search')).toBeTruthy();
    expect(funnel2Nav).toHaveLength(1);
    expect(funnel3Nav).toHaveLength(1);
    expect(toolBoxNav).toHaveLength(1);
  });

  it('should render profile, funnel2, funnel3, choose your loan and toolbox nav items if user finished funnel3', () => {
    const wrapper = mount(
      <Theme>
        <AuthedNav {...applicationDetails} applicationStage={APPLICATION_STAGES[2]} />
      </Theme>
    );
    const navItems = wrapper.find(SidebarNav.Item);
    const firstNavItem = navItems.first().props();
    const toolBoxNav = wrapper.find(ToolBoxSection);
    const funnel2Nav = wrapper.find(FunnelTwoSection);
    const funnel3Nav = wrapper.find(FunnelThreeSection);
    const chooseYourLoanNav = navItems.find(<SidebarNav.Item>Choose your loan</SidebarNav.Item>);
    expect(firstNavItem.children === 'Your profile').toBeTruthy();
    expect(firstNavItem.href && firstNavItem.href.includes('/home-loans/search')).toBeTruthy();
    expect(funnel2Nav).toHaveLength(1);
    expect(funnel3Nav).toHaveLength(1);
    expect(toolBoxNav).toHaveLength(1);
    expect(chooseYourLoanNav).toBeTruthy();
  });
});
