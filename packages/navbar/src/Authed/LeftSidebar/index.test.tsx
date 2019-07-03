import * as React from 'react';
import { mount } from 'enzyme';

import Theme from '@lendi-ui/theme';
import { ExitToApp } from '@lendi-ui/icon';

import { LeftSidebar } from '.';
import {
  Wrapper,
  Header,
  MenuCloseWrapper,
  MenuClose,
  CTAButton,
  CTAWrapper,
  ContactWrapper,
  ContactButton,
} from '../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../common/Header/index.style';
import { SidebarNav } from '../../common/SidebarNav';
import { Application } from '../../types';

const defaultProps = {
  show: true,
  onHide: () => {},
  onOpenRightSidebar: () => {},
  onLogout: () => {},
  application: {} as Application,
};

let element;
const render = (props = defaultProps) => {
  element = mount(
    <Theme>
      <LeftSidebar {...props} />
    </Theme>
  );
};

describe('Authed LeftSidebar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render();
    });

    it('should render the LeftSidebar', () => {
      expect(element.find(LeftSidebar).length).toEqual(1);
    });

    it('should render a Wrapper', () => {
      expect(element.find(Wrapper).length).toEqual(1);
    });

    it('should render a Header', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should render a MenuCloseWrapper', () => {
      expect(element.find(MenuCloseWrapper).length).toEqual(1);
    });

    it('should render a MenuClose', () => {
      expect(element.find(MenuClose).length).toEqual(1);
    });

    it('should render a HeaderLogo', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should render a ContactWrapper', () => {
      expect(element.find(ContactWrapper).length).toEqual(1);
    });

    it('should render a ContactButton', () => {
      expect(element.find(ContactButton).length).toEqual(1);
    });

    it('should render a SidebarNav', () => {
      expect(element.find(SidebarNav).length).toEqual(1);
    });

    it('should render a CTAWrapper', () => {
      expect(element.find(CTAWrapper).length).toEqual(1);
    });

    it('should render 2 CTAButtons', () => {
      expect(element.find(CTAButton).length).toEqual(2);
    });

    it('should render an ExitToApp', () => {
      expect(element.find(ExitToApp).length).toEqual(1);
    });
  });

  describe('ContactButton', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onHide: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });

    it('should call the onOpenRightSidebar on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onOpenRightSidebar: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('MenuCloseWrapper', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onHide: mock });

      element.find(MenuCloseWrapper).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('CTA Buttons', () => {
    describe('the Continue application button', () => {
      it('should link to the continueURL provided on the application', () => {
        const testURL = 'https://www.google.com';
        render({
          ...defaultProps,
          application: {
            continueURL: testURL,
          } as Application,
        });

        expect(
          element
            .find(CTAButton)
            .at(0)
            .props().href
        ).toEqual(testURL);
      });
    });

    describe('the Logout button', () => {
      it('should call the onLogout method', () => {
        const mock = jest.fn();
        render({ ...defaultProps, onLogout: mock });

        element
          .find(CTAButton)
          .at(1)
          .simulate('click');
        expect(mock).toBeCalled();
      });
    });
  });
});
