import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { BrokerNavigation, BrokerNavigationProps } from './index';
import { MenuItem } from '../Item/index';
import { Menu } from '../Menu/index';
import { Navigation } from '../Navigation/index';

let element: ReactWrapper<BrokerNavigationProps>;

function render(props) {
  element = mount(
    <Theme>
      <BrokerNavigation
        callNextPageWith={jest.fn()}
        processState={{
          loanStructure: true,
          applicants: true,
          assetsLiabilities: false,
          additionalIncome: true,
          workshopYourDeal: false,
          lenderSelection: false,
          documents: false,
          loanProgress: true,
          additionalFactFind: false,
          dealConditions: true,
          creditHistory: false,
          decisionEngine: true,
        }}
        applicantName="leo leo"
        applicantState={{
          contactDetails: true,
          personalDetails: true,
          employmentHistory: true,
          eConsent: true,
        }}
        {...props}
      />
    </Theme>
  );
}

describe('Navigation', () => {
  beforeEach(() => {
    render({});
  });

  it('it should mount the whole component', () => {
    expect(element.find(BrokerNavigation)).toHaveLength(1);
    expect(element.find(Navigation)).toHaveLength(1);
  });

  it('it should mount 5 Menu component', () => {
    expect(element.find(Menu)).toHaveLength(5);
  });

  it('it should mount 12 MenuItem component', () => {
    expect(element.find(MenuItem)).toHaveLength(4);
  });

  describe('Broker Navigation: test native props and Standard HTML Attributes', () => {
    let attributes;
    beforeEach(() => {
      render({ 'aria-label': 'testLabel', 'aria-describedby': 'info', id: 'testId', title: 'testTitle' });
      attributes = element.find(Navigation).props();
    });
    it('should mount with Aria attributes', () => {
      expect(attributes['aria-label']).toBe('testLabel');
      expect(attributes['aria-describedby']).toBe('info');
    });
    it('should mount with native props like id, title', () => {
      expect(attributes.id).toBe('testId');
      expect(attributes.title).toBe('testTitle');
    });
  });
});
