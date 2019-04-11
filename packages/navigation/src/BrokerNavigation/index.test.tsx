import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { BrokerNavigation } from './index';
import { MenuItem } from '../Item/index';
import { Menu } from '../Menu/index';
import { Navigation } from '../Navigation/index';

let element: any;

describe('Navigation', () => {
  beforeEach(() => {
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
        />
      </Theme>
    );
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
});
