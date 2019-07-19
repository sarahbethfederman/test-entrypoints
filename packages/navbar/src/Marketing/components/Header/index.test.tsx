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
  CallToActionWrapper,
} from '../../../common/Header/index.style';
import { HOME_PAGE_LINK, SIGN_UP_LINK } from '../../../constants/links';
import { Application } from '../../../common/types';

let element;
const renderAuthed = (
  props = {
    onOpenLeftSidebar: () => {},
    onOpenRightSidebar: () => {},
    application: {} as Application,
  }
) => {
  element = mount(
    <Theme>
      <Header isAuthenticated={true} {...props} />
    </Theme>
  );
};

const renderUnAuthed = (
  props = {
    onOpenLeftSidebar: () => {},
    onOpenRightSidebar: () => {},
    application: {} as Application,
  }
) => {
  element = mount(
    <Theme>
      <Header isAuthenticated={false} {...props} />
    </Theme>
  );
};

describe('Authed Navbar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      renderAuthed();
    });

    it('should renderAuthed the <Header>', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should renderAuthed a <MenuButtonWrapper>', () => {
      expect(element.find(MenuButtonWrapper).length).toEqual(1);
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
    it('should link to the HOME_PAGE_LINK', () => {
      renderAuthed();
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
      renderAuthed();
    });

    it('should not show when the viewport is tablet or larger', () => {
      renderAuthed();
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.tablet})`,
      });
    });

    it('should display when the viewport is mobile', () => {
      renderAuthed();
      // @ts-ignore
      expect(element.find(MenuButtonWrapper)).not.toHaveStyleRule('display', 'none', {
        media: `(min-width:${Breakpoint.mobile})`,
      });
    });

    it('should run the onOpenLeftSidebar method on click', () => {
      const mock = jest.fn();
      renderAuthed({
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
        renderAuthed({
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
        renderAuthed({
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

describe('Unauthed Navbar', () => {
  it('should link to the SIGN_UP_LINK', () => {
    renderUnAuthed();

    expect(
      element
        .find(Button)
        .at(1)
        .props().href
    ).toEqual(SIGN_UP_LINK);
  });
});
