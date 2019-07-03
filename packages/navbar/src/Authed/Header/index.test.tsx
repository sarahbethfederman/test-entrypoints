import * as React from 'react';
import { mount } from 'enzyme';

import Theme from '@lendi-ui/theme';
import { Button } from '@lendi-ui/button';
import { Breakpoint } from '@lendi-ui/breakpoint';

import { Header } from './';
import {
  MenuButtonWrapper,
  MenuButton,
  LogoLink,
  HeaderLogo,
  NavigationButtons,
  CallToActionWrapper,
} from '../../common/Header/index.style';
import { HOME_PAGE_LINK } from '../../constants/links';
import { Application } from '../../types';

let element;
const render = (
  props = {
    onOpenLeftSidebar: () => {},
    onOpenRightSidebar: () => {},
    application: {} as Application,
  }
) => {
  element = mount(
    <Theme>
      <Header {...props} />
    </Theme>
  );
};

describe('Authed Navbar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render();
    });

    it('should render the <Header>', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should render a <MenuButtonWrapper>', () => {
      expect(element.find(MenuButtonWrapper).length).toEqual(1);
    });

    it('should render a <MenuButton>', () => {
      expect(element.find(MenuButton).length).toEqual(1);
    });

    it('should render a <LogoLink>', () => {
      expect(element.find(LogoLink).length).toEqual(1);
    });

    it('should render a <HeaderLogo>', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should render a <NavigationButtons>', () => {
      expect(element.find(NavigationButtons).length).toEqual(1);
    });

    it('should render a <CallToActionWrapper>', () => {
      expect(element.find(CallToActionWrapper).length).toEqual(1);
    });

    it('should render 2 <Button>s', () => {
      expect(element.find(Button).length).toEqual(2);
    });
  });

  describe('LogoLink', () => {
    it('should link to the HOME_PAGE_LINK', () => {
      render();
      expect(
        element
          .find(LogoLink)
          .props()
          .href.includes(HOME_PAGE_LINK)
      );
    });
  });

  describe('MenuButton', () => {
    beforeEach(() => {
      render();
    });

    it('should not show when the viewport is tablet or larger', () => {
      render();
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
    });

    it('should display when the viewport is mobile', () => {
      render();
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).not.toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
    });

    it('should run the onOpenLeftSidebar method on click', () => {
      const mock = jest.fn();
      render({
        onOpenLeftSidebar: mock,
        onOpenRightSidebar: () => {},
        application: {} as Application,
      });

      element
        .find(MenuButtonWrapper)
        .at(0)
        .simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('CallToAction Buttons', () => {
    describe('the Contact us button', () => {
      it('should open the onOpenRightSidebar method on click', () => {
        const mock = jest.fn();
        render({
          onOpenLeftSidebar: () => {},
          onOpenRightSidebar: mock,
          application: {} as Application,
        });

        element
          .find(Button)
          .at(0)
          .simulate('click');
        expect(mock).toBeCalled();
      });
    });

    describe('the Continue application button', () => {
      it('should link to the continueURL provided on the application', () => {
        const testURL = 'https://www.google.com';
        render({
          onOpenLeftSidebar: () => {},
          onOpenRightSidebar: () => {},
          application: {
            continueURL: testURL,
          } as Application,
        });

        expect(
          element
            .find(Button)
            .at(1)
            .props().href
        ).toEqual(testURL);
      });
    });
  });
});
