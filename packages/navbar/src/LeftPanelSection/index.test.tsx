import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { UnauthedNav } from './UnauthedNav';
import { AuthedNav } from './AuthedNav';
import { LeftPanelSection } from '.';
import { Application } from './../types';

describe('LeftPanelSection', () => {
  it('should render unauthed nav component if user is not authenticated', () => {
    const wrapper = mount(
      <Theme>
        <LeftPanelSection isAuthenticated={false} />
      </Theme>
    );
    expect(wrapper.find(UnauthedNav)).toBeTruthy();
  });

  it('should render authed nav component if user is authenticated and has application data', () => {
    const applicants = [];
    const application: Application = {
      stage: 'started_application',
      sfid: '12222',
      number: 1,
      type: 'Refinance',
    };

    const AuthedProps = {
      applicationStage: application.stage,
      applicationSfid: application.sfid,
      transactionType: application.type,
      applicants: applicants,
      applicationNumber: application.number,
      params: '',
    };
    const wrapper = mount(
      <Theme>
        <LeftPanelSection isAuthenticated={true} application={application} applicants={applicants} />
      </Theme>
    );
    expect(wrapper.find(AuthedNav).props()).toEqual(AuthedProps);
  });

  it('should render authed nav component if user is authenticated with no application', () => {
    const wrapper = mount(
      <Theme>
        <LeftPanelSection isAuthenticated={true} />
      </Theme>
    );
    expect(wrapper.find(AuthedNav).props()).toEqual({ params: '' });
  });
});
