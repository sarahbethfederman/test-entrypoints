import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Link } from '@lendi-ui/typography';
import { LeftSidebar } from '.';
import { Logout } from './index.style';

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
