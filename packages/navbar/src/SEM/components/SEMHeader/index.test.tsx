import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Theme from '@lendi-ui/theme';
import { Button } from '@lendi-ui/button';
import { Breakpoint } from '@lendi-ui/breakpoint';

import { SEMHeader, SEMHeaderProps } from './index';
import { SEMNavigationButtons } from '../SEMNavigationButtons/index';
import {
  MenuButtonWrapper,
  HamburgerLogoWrapper,
  MenuButton,
  LogoLink,
  HeaderLogo,
  CallToActionWrapper,
} from '../../../common/Header/index.style';
import { HOME_PAGE_LINK, SIGN_UP_LINK } from '../../../constants/links';
import { Application } from '../../../common/types';

let element: ReactWrapper<SEMHeaderProps>;
const onOpenLeftSidebar = () => {};
const onOpenRightSidebar = () => {};
const application = {} as Application;

const render = (props: SEMHeaderProps) => {
  element = mount(
    <Theme>
      <SEMHeader {...props} />
    </Theme>
  );
};

describe('Authed Navbar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render({ onOpenLeftSidebar, onOpenRightSidebar, application, isAuthenticated: true });
    });

    it('should renderAuthed the <SEMHeader>', () => {
      expect(element.find(SEMHeader).length).toEqual(1);
    });

    it('should renderAuthed a <SEMNavigationButtons>', () => {
      expect(element.find(SEMNavigationButtons).length).toEqual(1);
    });

    it('should renderAuthed a <HamburgerLogoWrapper>', () => {
      expect(element.find(HamburgerLogoWrapper).length).toEqual(1);
    });

    it('should renderAuthed a <MenuButton>', () => {
      expect(element.find(MenuButton).length).toEqual(1);
    });

    it('should renderAuthed a <LogoLink>', () => {
      expect(element.find(LogoLink).length).toEqual(1);
    });

    it('should renderAuthed a <HeaderLogo>', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should renderAuthed a <CallToActionWrapper>', () => {
      expect(element.find(CallToActionWrapper).length).toEqual(1);
    });

    it('should renderAuthed 2 <Button>s', () => {
      expect(element.find(Button).length).toEqual(2);
    });
  });

  describe('LogoLink', () => {
    beforeEach(() => {
      render({ onOpenLeftSidebar, onOpenRightSidebar, application, isAuthenticated: true });
    });

    it('should link to the HOME_PAGE_LINK', () => {
      expect(
        element
          .find(LogoLink)
          .props()
          .href.includes(HOME_PAGE_LINK)
      );
    });
  });

  describe('MenuButton', () => {
    const mock = jest.fn();
    beforeEach(() => {
      render({ onOpenLeftSidebar: mock, onOpenRightSidebar, application, isAuthenticated: true });
    });

    it('should not show when the viewport is tablet or larger', () => {
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.desktop})`,
      });
    });

    it('should display when the viewport is mobile', () => {
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).not.toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
    });

    it('should run the onOpenLeftSidebar method on click', () => {
      element
        .find(MenuButtonWrapper)
        .at(0)
        .simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('CallToAction Buttons', () => {
    describe('the Contact us button', () => {
      const mock = jest.fn();
      beforeEach(() => {
        render({ onOpenLeftSidebar, onOpenRightSidebar: mock, application, isAuthenticated: true });
      });

      it('should open the onOpenRightSidebar method on click', () => {
        element
          .find(Button)
          .at(0)
          .simulate('click');
        expect(mock).toBeCalled();
      });
    });
  });
});

describe('Unauthed Navbar', () => {
  beforeEach(() => {
    render({ onOpenLeftSidebar, onOpenRightSidebar, application, isAuthenticated: false });
  });
  it('should link to the SIGN_UP_LINK', () => {
    expect(
      element
        .find(Button)
        .at(1)
        .props().href
    ).toEqual(SIGN_UP_LINK);
  });
});
