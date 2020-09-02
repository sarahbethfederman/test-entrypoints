import * as React from 'react';
import { mount } from 'enzyme';

import Theme from '@lendi-ui/theme';
import { ExitToApp } from '@lendi-ui/icon';

import { LeftSidebar, DASHBOARD_URL, PROPERTY_REPORTS_URL } from '.';
import {
  Wrapper,
  Header,
  MenuCloseWrapper,
  MenuClose,
  CTAButton,
  CTAWrapper,
  ContactWrapper,
  ContactButton,
  AuthedItemsWrapper,
  AuthedItem,
  AuthedItemLabel,
  ChevronIcon,
} from '../../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../../common/Header/index.style';
import { SidebarNav } from '../../../common/SidebarNav';
import { Application } from '../../../common/types';
import { LeftSidebarItems } from '../../../common/LeftSidebarItems';

const defaultProps = {
  show: true,
  onHide: () => {},
  onOpenRightSidebar: () => {},
  onLogout: () => {},
  application: {} as Application,
};

let element;
const renderAuthed = (props = defaultProps) => {
  element = mount(
    <Theme>
      <LeftSidebar isAuthenticated={true} {...props} />
    </Theme>
  );
};

const renderUnAuthed = (props = defaultProps) => {
  element = mount(
    <Theme>
      <LeftSidebar isAuthenticated={false} {...props} />
    </Theme>
  );
};

describe('UnAuthed LeftSidebar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      renderAuthed();
    });

    it('should renderAuthed the LeftSidebar', () => {
      expect(element.find(LeftSidebar).length).toEqual(1);
    });

    it('should renderAuthed a Wrapper', () => {
      expect(element.find(Wrapper).length).toEqual(1);
    });

    it('should renderAuthed a Header', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should renderAuthed a MenuCloseWrapper', () => {
      expect(element.find(MenuCloseWrapper).length).toEqual(1);
    });

    it('should renderAuthed a MenuClose', () => {
      expect(element.find(MenuClose).length).toEqual(1);
    });

    it('should renderAuthed a HeaderLogo', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should renderAuthed a ContactWrapper', () => {
      expect(element.find(ContactWrapper).length).toEqual(1);
    });

    it('should renderAuthed a ContactButton', () => {
      expect(element.find(ContactButton).length).toEqual(1);
    });

    it('should renderAuthed a SidebarNav', () => {
      expect(element.find(SidebarNav).length).toEqual(1);
    });

    it('should renderAuthed an AuthedItemsWrapper', () => {
      expect(element.find(AuthedItemsWrapper).length).toEqual(1);
    });

    it('should renderAuthed 2 AuthedItems', () => {
      expect(element.find(AuthedItem).length).toEqual(2);
    });

    it('should renderAuthed 2 AuthedItemLabels', () => {
      expect(element.find(AuthedItemLabel).length).toEqual(2);
    });

    it('should renderAuthed 2 ChevronIcons', () => {
      expect(element.find(ChevronIcon).length).toEqual(2);
    });

    it('should renderAuthed a LeftSidebarItems', () => {
      expect(element.find(LeftSidebarItems).length).toEqual(1);
    });

    it('should renderAuthed a CTAWrapper', () => {
      expect(element.find(CTAWrapper).length).toEqual(1);
    });

    it('should renderAuthed 2 CTAButtons', () => {
      expect(element.find(CTAButton).length).toEqual(2);
    });

    it('should renderAuthed an ExitToApp', () => {
      expect(element.find(ExitToApp).length).toEqual(1);
    });
  });

  describe('ContactButton', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      renderAuthed({ ...defaultProps, onHide: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });

    it('should call the onOpenRightSidebar on click', () => {
      const mock = jest.fn();
      renderAuthed({ ...defaultProps, onOpenRightSidebar: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('AuthedItems', () => {
    beforeEach(() => {
      renderAuthed();
    });

    describe('My dashboard', () => {
      it('should link to the dashboard page', () => {
        const dashboardButton = element.find(AuthedItem).at(0);
        expect(dashboardButton.props().href).toEqual(DASHBOARD_URL);
      });
    });

    describe('My property reports', () => {
      it('should link to the property reports page', () => {
        const propertyReportsButton = element.find(AuthedItem).at(1);
        expect(propertyReportsButton.props().href).toEqual(PROPERTY_REPORTS_URL);
      });
    });
  });

  describe('MenuCloseWrapper', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      renderAuthed({ ...defaultProps, onHide: mock });

      element.find(MenuCloseWrapper).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('CTA Buttons', () => {
    describe('the Continue application button', () => {
      it('should link to the continueURL provided on the application', () => {
        const testURL = 'https://www.google.com';
        renderAuthed({
          ...defaultProps,
          application: {
            continueURL: testURL,
          } as Application,
        });

        expect(element.find(CTAButton).at(0).props().href).toEqual(testURL);
      });
    });

    describe('the Logout button', () => {
      it('should call the onLogout method', () => {
        const mock = jest.fn();
        renderAuthed({ ...defaultProps, onLogout: mock });

        element.find(CTAButton).at(1).simulate('click');
        expect(mock).toBeCalled();
      });
    });
  });
});

describe('Authed LeftSidebar', () => {
  describe('renderUnAutheding', () => {
    beforeEach(() => {
      renderUnAuthed();
    });

    it('should renderUnAuthed the LeftSidebar', () => {
      expect(element.find(LeftSidebar).length).toEqual(1);
    });

    it('should renderUnAuthed a Wrapper', () => {
      expect(element.find(Wrapper).length).toEqual(1);
    });

    it('should renderUnAuthed a Header', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should renderUnAuthed a MenuCloseWrapper', () => {
      expect(element.find(MenuCloseWrapper).length).toEqual(1);
    });

    it('should renderUnAuthed a MenuClose', () => {
      expect(element.find(MenuClose).length).toEqual(1);
    });

    it('should renderUnAuthed a HeaderLogo', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should renderUnAuthed a ContactWrapper', () => {
      expect(element.find(ContactWrapper).length).toEqual(1);
    });

    it('should renderUnAuthed a ContactButton', () => {
      expect(element.find(ContactButton).length).toEqual(1);
    });

    it('should renderUnAuthed a SidebarNav', () => {
      expect(element.find(SidebarNav).length).toEqual(1);
    });

    it('should renderUnAuthed a LeftSidebarItems', () => {
      expect(element.find(LeftSidebarItems).length).toEqual(1);
    });
  });

  describe('ContactButton', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      renderUnAuthed({ ...defaultProps, onHide: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });

    it('should call the onOpenRightSidebar on click', () => {
      const mock = jest.fn();
      renderUnAuthed({ ...defaultProps, onOpenRightSidebar: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('MenuCloseWrapper', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      renderUnAuthed({ ...defaultProps, onHide: mock });

      element.find(MenuCloseWrapper).simulate('click');
      expect(mock).toBeCalled();
    });
  });
});
