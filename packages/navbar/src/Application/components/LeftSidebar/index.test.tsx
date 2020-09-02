import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Link } from '@lendi-ui/typography';
import { LeftSidebar } from '.';
import { Logout } from '../../../common/LeftSidebar/index.style';
import { AnalyticsContextProps } from '@lendi-ui/utils';
import { OldMenuButton } from '../../../common/Header/index.style';
import { WindowPosition } from '@lendi/lendi-analytics-package';

describe('LeftSidebar', () => {
  it('should render the login and sign up links when the user is not authenticated', () => {
    const wrapper = mount(
      <Theme>
        <LeftSidebar show={true} isAuthenticated={false} />
      </Theme>
    );
    const links = wrapper.find(Link);
    expect(links.contains('Log in')).toBeTruthy();
    expect(links.contains('Sign up')).toBeTruthy();
    expect(links.contains('Manage applications')).toBeFalsy();
  });

  it('should not render the login and sign up links when the user is authenticated', () => {
    const wrapper = mount(
      <Theme>
        <LeftSidebar
          show={true}
          isAuthenticated={true}
          applicationDetails={{ applicationNumber: 3, applicationStage: 'started_application' }}
        />
      </Theme>
    );
    const links = wrapper.find(Link);
    expect(links.contains('Log in')).toBeFalsy();
    expect(links.contains('Sign up')).toBeFalsy();
    expect(links.contains('Manage applications')).toBeTruthy();
  });

  it('should render the log out link when the user is authenticated', () => {
    const wrapper = mount(
      <Theme>
        <LeftSidebar show={true} isAuthenticated={true} />
      </Theme>
    );
    expect(wrapper.find(Logout)).toHaveLength(1);
  });

  it('should not render the log out link when the user is not authenticated', () => {
    const wrapper = mount(
      <Theme>
        <LeftSidebar show={true} isAuthenticated={false} />
      </Theme>
    );
    expect(wrapper.find(Logout)).toHaveLength(0);
  });

  it('should not render the any links when the user is authenticated and has no application', () => {
    const wrapper = mount(
      <Theme>
        <LeftSidebar show={true} isAuthenticated={true} applicationDetails={{ applicationStage: 'no_application' }} />
      </Theme>
    );
    const links = wrapper.find(Link);
    expect(links.contains('Log in')).toBeFalsy();
    expect(links.contains('Sign up')).toBeFalsy();
    expect(links.contains('Manage applications')).toBeFalsy();
  });
});

describe('Left side bar - click event', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const mockAnalyticsContext: AnalyticsContextProps = {
    analyticsForNavigation: jest.fn(),
  };
  beforeEach(() => {
    wrapper = mount(
      <Theme>
        <LeftSidebar show={true} isAuthenticated={true} onHide={() => {}} />
      </Theme>
    );
    wrapper.find(LeftSidebar).instance().context = mockAnalyticsContext;
    wrapper.update();
  });

  it('should call AnalyticsContext fn', () => {
    expect(wrapper.find(OldMenuButton)).toHaveLength(1);
    wrapper.find(OldMenuButton).at(0).simulate('click');
    wrapper.update();

    expect(mockAnalyticsContext.analyticsForNavigation).toBeCalledTimes(1);
    expect(mockAnalyticsContext.analyticsForNavigation).toBeCalledWith('icon', WindowPosition.navigation_left);
  });
});
