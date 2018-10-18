import * as React from 'react';
import { mount } from 'enzyme';
import Logo from '.';
import Theme from '@lendi-ui/theme';
import { LendiLogo } from '@lendi-ui/icon';

/**
 * Test case Logo
 */
describe('Logo', () => {
  let Wrapper;
  /**
   * Test Logo wihout color, width and height
   */
  describe('with no color, width, height and className', () => {
    beforeEach(() => {
      Wrapper = mount(
        <Theme>
          <Logo />
        </Theme>
      );
    });
    it('should render "shade.1000" styles when no color is given', () => {
      expect(Wrapper).toMatchSnapshot();
    });
  });

  /**
   * Test Logo with color, width and height
   */
  describe('with provided color, width, height and className', () => {
    beforeEach(() => {
      Wrapper = mount(
        <Theme>
          <Logo variant="light" width="240px" height="120px" className="some-class" />
        </Theme>
      );
    });
    it('should render "shade.800" styles when color is given', () => {
      expect(Wrapper.find(LendiLogo).props().color).toEqual('shade.0');
    });

    it('should render width="240px" when width is given', () => {
      expect(Wrapper.find(Logo).props().width).toEqual('240px');
    });

    it('should render height="120px" when height is given', () => {
      expect(Wrapper.find(Logo).props().height).toEqual('120px');
    });

    it('should render className="some-class" when className is given', () => {
      expect(Wrapper.find(Logo).props().className).toEqual('some-class');
    });

    it('should render the icon with class "some-class" when className is given', () => {
      expect(Wrapper.find(LendiLogo).hasClass('some-class')).toEqual(true);
    });
  });
});
