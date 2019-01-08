import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { UnauthedNav } from './UnauthedNav';
import { LeftPanelSection } from '.';

describe('LeftPanelSection', () => {
  it('should render unauthed nav component if no application props is passed in', () => {
    const wrapper = shallow(
      <Theme>
        <LeftPanelSection />
      </Theme>
    );
    expect(wrapper.find(UnauthedNav)).toBeTruthy();
  });

  it('should render authed nav component when application props is passed in', () => {
    const application = {
      stage: 'no_application',
      sfid: '12222',
      number: 1,
      type: 'refinance',
      applicants: [],
    };
    const wrapper = shallow(
      <Theme>
        <LeftPanelSection application={application} />
      </Theme>
    );
    expect(wrapper.find(UnauthedNav)).toBeTruthy();
  });
});
