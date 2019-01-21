import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Button, ButtonSize, ButtonVariant } from '.';

const allVariants: ButtonVariant[] = ['primary', 'emphasis', 'secondary', 'empty'];
const outlinedVariants: ButtonVariant[] = ['secondary', 'empty'];
const sizes: ButtonSize[] = ['lg', 'md', 'sm'];

let button;

function render(props) {
  const element = mount(
    <Theme>
      <Button variant="primary" {...props}>
        Click me!
      </Button>
    </Theme>
  );
  button = element.find('button');
}

describe('Button', () => {
  it('should render a <a> when href specified', () => {
    const element = mount(
      <Theme>
        <Button variant="primary" href="https://www.lendi.com.au/">
          Click me!
        </Button>
      </Theme>
    );
    expect(element.find('a')).toHaveLength(1);
    expect(element.find('button')).toHaveLength(0);
  });

  it('should render a <button> when href is not specified', () => {
    const element = mount(
      <Theme>
        <Button variant="primary" onClick={jest.fn()}>
          Click me!
        </Button>
      </Theme>
    );
    expect(element.find('a')).toHaveLength(0);
    expect(element.find('button')).toHaveLength(1);
  });

  allVariants.forEach((variant) => {
    describe(`${variant}`, () => {
      sizes.forEach((size) => {
        it(`should render "${size}" size styles`, () => {
          render({ variant, size });
          expect(button).toMatchSnapshot();
        });
      });
    });
  });

  describe(`primary`, () => {
    it('should render normal styles', () => {
      render({ variant: 'primary', isInverse: false });
      expect(button).not.toHaveStyleRule('background-color', '#ffffff');
      expect(button).toMatchSnapshot();
    });
    it('should render inverse styles', () => {
      render({ variant: 'primary', isInverse: true });
      expect(button).toHaveStyleRule('background-color', '#ffffff');
      expect(button).toMatchSnapshot();
    });
    it('should render full width', () => {
      render({ variant: 'primary', isFullWidth: true });
      expect(button).toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'primary', isFullWidth: false });
      expect(button).not.toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should render disabled button', () => {
      render({ variant: 'primary', isDisabled: true });
      expect(button).toMatchSnapshot();
    });
    it('should render normal button', () => {
      render({ variant: 'primary', isDisabled: false });
      expect(button).toMatchSnapshot();
    });
  });

  describe(`emphasis`, () => {
    it('should render normal styles', () => {
      render({ variant: 'emphasis', isInverse: false });
      expect(button).not.toHaveStyleRule('background-color', '#ffffff');
      expect(button).toMatchSnapshot();
    });
    it('should not render inverse styles', () => {
      render({ variant: 'emphasis', isInverse: true });
      expect(button).not.toHaveStyleRule('background-color', '#ffffff');
      expect(button).toMatchSnapshot();
    });
    it('should render full width', () => {
      render({ variant: 'emphasis', isFullWidth: true });
      expect(button).toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'emphasis', isFullWidth: false });
      expect(button).not.toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should render disabled button', () => {
      render({ variant: 'emphasis', isDisabled: true });
      expect(button).toMatchSnapshot();
    });
    it('should render normal button', () => {
      render({ variant: 'emphasis', isDisabled: false });
      expect(button).toMatchSnapshot();
    });
  });

  outlinedVariants.forEach((variant) => {
    describe(`${variant}`, () => {
      it('should render normal styles', () => {
        render({ variant, isInverse: false });
        expect(button).not.toHaveStyleRule('color', '#ffffff');
        expect(button).toMatchSnapshot();
      });
      it('should render inverse styles', () => {
        render({ variant, isInverse: true });
        expect(button).toHaveStyleRule('color', '#ffffff');
        expect(button).toMatchSnapshot();
      });
    });
    it('should render full width', () => {
      render({ variant: 'primary', isFullWidth: true });
      expect(button).toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should not render full width', () => {
      render({ variant: 'primary', isFullWidth: false });
      expect(button).not.toHaveStyleRule('width', '100%');
      expect(button).toMatchSnapshot();
    });
    it('should render disabled button', () => {
      render({ variant: 'primary', isDisabled: true });
      expect(button).toMatchSnapshot();
    });
    it('should render normal button', () => {
      render({ variant: 'primary', isDisabled: false });
      expect(button).toMatchSnapshot();
    });
  });
});
