import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Header } from './components/Header';
import { RightSidebar } from '../common/RightSidebar';
import { LeftSidebar } from './components/LeftSidebar';
import { Application } from '../common/types';

import { MarketingNavbar, MarketingNavbarProps } from '.';

let element: ReactWrapper<MarketingNavbarProps>;
const render = (
  props = {
    application: {} as Application,
  }
) => {
  element = mount(
    <Theme>
      <MarketingNavbar {...props} />
    </Theme>
  );
};

describe('Authed Navbar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render();
    });

    it('should render the Navbar', () => {
      expect(element.find(MarketingNavbar).length).toEqual(1);
    });

    it('should render a Header', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should render a LeftSidebar', () => {
      expect(element.find(LeftSidebar).length).toEqual(1);
    });

    it('should render a RightSidebar', () => {
      expect(element.find(RightSidebar).length).toEqual(1);
    });
  });
});
