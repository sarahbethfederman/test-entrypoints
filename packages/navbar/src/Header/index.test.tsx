import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Header } from './index';
import {
  FullWidthContainer,
  Container,
  LeftGroup,
  RightGroup,
  LogoWrapper,
  LogoLink,
  HeaderLogo,
  MenuButton,
  HeaderButton,
} from './index.style';
import { Hamburger } from '@lendi-ui/icon';
import { ButtonGroup } from '@lendi-ui/button';
import { HOME_PAGE_LINK } from './../constants/links';

let element;
const onOpenLeftSidebar = jest.fn();
const onOpenRightSidebar = jest.fn();

const render = (props) => {
  element = mount(
    <Theme>
      <Header
        onOpenLeftSidebar={onOpenLeftSidebar}
        onOpenRightSidebar={onOpenRightSidebar}
        isTransparent={false}
        {...props}
      />
    </Theme>
  );
};

describe('Header', () => {
  describe('it should render general components', () => {
    beforeEach(() => render({}));

    it('it should mount the whole Header component', () => {
      expect(element.find(FullWidthContainer)).toHaveLength(1);
      expect(element.find(Container)).toHaveLength(1);
    });

    it('it should mount the LeftGroup component', () => {
      expect(element.find(LeftGroup)).toHaveLength(1);
      expect(element.find(MenuButton)).toHaveLength(1);
      expect(element.find(Hamburger)).toHaveLength(1);
      expect(element.find(LogoWrapper)).toHaveLength(1);
      expect(element.find(LogoLink)).toHaveLength(1);
      expect(element.find(LogoLink).props().href).toEqual(HOME_PAGE_LINK);
      expect(element.find(HeaderLogo)).toHaveLength(1);
    });

    it('it should mount the LeftGroup component', () => {
      expect(element.find(RightGroup)).toHaveLength(1);
      expect(element.find(ButtonGroup)).toHaveLength(1);
      expect(element.find(HeaderButton)).toHaveLength(2);
    });
  });
});
