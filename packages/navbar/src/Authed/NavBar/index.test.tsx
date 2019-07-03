import * as React from 'react';
import { mount } from 'enzyme';

import Theme from '@lendi-ui/theme';

import { AuthedNavbar } from '.';
import { Application } from '../../types';
import { Header } from '../Header';
import { LeftSidebar } from '../LeftSidebar';
import { RightSidebar } from '../../common/RightSidebar';

let element;
const render = (
  props = {
    application: {} as Application,
  }
) => {
  element = mount(
    <Theme>
      <AuthedNavbar {...props} />
    </Theme>
  );
};

describe('Authed Navbar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render();
    });

    it('should render the Navbar', () => {
      expect(element.find(AuthedNavbar).length).toEqual(1);
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
