import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import LenderLogos, { LenderLogosProps, LenderIDType } from './index';

let element: ReactWrapper<LenderLogosProps>;
const lenderLogosID: LenderIDType[] = [
  'adelaide_bank',
  'anz_bank',
  'australian_first_mortgage',
  'auswide_bank',
  'bank_australia',
  'bank_of_melbourne',
  'bank_sa',
  'bank_west',
  'better_choice',
  'better_mortgage_mgmt',
  'blue_stone',
  'bluebay_home_loans',
  'citi_bank',
  'click_loans',
  'commonwealth_bank',
  'connective_home_loans',
  'gateway_bank',
  'heritage',
  'hsbc',
  'ing',
  'la_trobe',
  'loanave',
  'macquarie',
  'me_bank',
  'mkm_capital',
  'my_state_bank',
  'newcastle_permanent_building_society',
  'pepper',
  'pn_bank',
  'resimac',
  'st_george',
  'suncorp',
  'teachers_mutual',
  'virgin_money',
  'westpac_bank',
];

const render = (props: LenderLogosProps) => {
  element = mount(
    <Theme>
      <LenderLogos {...props} />
    </Theme>
  );
};

lenderLogosID.forEach((lenderLogoID) => {
  describe('LenderLogos', () => {
    beforeEach(() => render({ lenderId: lenderLogoID }));
    it('should mount LenderLogos component', () => {
      expect(element.find(LenderLogos)).toHaveLength(1);
    });

    it('should mount LenderLogos component', () => {
      expect(
        element
          .find(LenderLogos)
          .find('span')
          .prop('data-testd')
      ).toEqual(lenderLogoID);
    });
  });
});
