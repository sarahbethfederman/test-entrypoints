import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Button, { Size, Variant } from '.';
import { heightBySize, Wrapper } from './index.style';

const allVariants: Variant[] = ['primary', 'emphasis', 'secondary', 'empty'];
const outlinedVariants: Variant[] = ['secondary', 'empty'];
const sizes: Size[] = ['lg', 'md', 'sm', 'xs'];

let element;

function render(props) {
  element = mount(
    <Theme>
      <Button {...props}>Click me!</Button>
    </Theme>
  );
}

describe('Button', () => {
  allVariants.forEach((variant) => {
    describe(`${variant}`, () => {
      sizes.forEach((size) => {
        it(`should render "${size}" size styles`, () => {
          render({ variant, size });
          expect(element).toHaveStyleRule('height', heightBySize[size]);
          expect(element).toMatchSnapshot();
        });
      });
    });
  });

  describe(`primary`, () => {
    it('should render normal styles', () => {
      render({ variant: 'primary', isInverse: false });
      expect(element).not.toHaveStyleRule('background-color', '#ffffff');
      expect(element).toMatchSnapshot();
    });
    it('should render inverse styles', () => {
      render({ variant: 'primary', isInverse: true });
      expect(element).toHaveStyleRule('background-color', '#ffffff');
      expect(element).toMatchSnapshot();
    });
    it('should render full width', () => {
      render({ variant: 'primary', isFullWidth: true });
      expect(element).toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'primary', isFullWidth: false });
      expect(element).not.toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
  });

  describe(`emphasis`, () => {
    it('should render normal styles', () => {
      render({ variant: 'emphasis', isInverse: false });
      expect(element).not.toHaveStyleRule('background-color', '#ffffff');
      expect(element).toMatchSnapshot();
    });
    it('should not render inverse styles', () => {
      render({ variant: 'emphasis', isInverse: true });
      expect(element).not.toHaveStyleRule('background-color', '#ffffff');
      expect(element).toMatchSnapshot();
    });
    it('should render full width', () => {
      render({ variant: 'primary', isFullWidth: true });
      expect(element).toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'primary', isFullWidth: false });
      expect(element).not.toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
  });

  outlinedVariants.forEach((variant) => {
    describe(`${variant}`, () => {
      it('should render normal styles', () => {
        render({ variant, isInverse: false });
        expect(element).not.toHaveStyleRule('color', '#ffffff');
        expect(element).toMatchSnapshot();
      });
      it('should render inverse styles', () => {
        render({ variant, isInverse: true });
        expect(element).toHaveStyleRule('color', '#ffffff');
        expect(element).toMatchSnapshot();
      });
    });
    it('should render full width', () => {
      render({ variant: 'primary', isFullWidth: true });
      expect(element).toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'primary', isFullWidth: false });
      expect(element).not.toHaveStyleRule('width', '100%');
      expect(element).toMatchSnapshot();
    });
  });
});
