import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Lock } from '@lendi-ui/icon';
import { Button, ButtonSize, ButtonVariant } from '.';

const allVariants: ButtonVariant[] = ['primary', 'emphasis', 'secondary', 'empty'];
const outlinedVariants: ButtonVariant[] = ['secondary', 'empty'];
const sizes: ButtonSize[] = ['lg', 'md', 'sm', 'xs'];

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

  it(`it should render disabled style when button have 'href' and 'isDisabled' props`, () => {
    const element = mount(
      <Theme>
        <Button variant="primary" href="https://www.lendi.com.au/" isDisabled>
          Click me!
        </Button>
      </Theme>
    );
    expect(element.find(Button)).toHaveStyleRule('cursor', 'not-allowed');
  });

  it(`it should NOT call 'onClick' function when button have 'href' and 'isDisabled' props`, () => {
    const mockOnClick = jest.fn();
    const element = mount(
      <Theme>
        <Button variant="primary" href="https://www.lendi.com.au/" isDisabled onClick={mockOnClick}>
          Click me!
        </Button>
      </Theme>
    );
    element.find(Button).simulate('click');
    expect(mockOnClick).not.toBeCalled();
  });

  it(`it should NOT call 'onClick' function for disabled button`, () => {
    const mockOnClick = jest.fn();
    const element = mount(
      <Theme>
        <Button variant="primary" isDisabled onClick={mockOnClick}>
          Click me!
        </Button>
      </Theme>
    );
    element.find(Button).simulate('click');
    expect(mockOnClick).not.toBeCalled();
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

  it('should infer aria-label on button with string children', () => {
    const element = mount(
      <Theme>
        <Button variant="primary" onClick={jest.fn()}>
          Click me!
        </Button>
      </Theme>
    );
    expect(element.find('button[aria-label]').prop('aria-label')).toEqual('Click me!');
  });

  it('should have ability to pass aria label when context cannot be inferred', () => {
    const element = mount(
      <Theme>
        <Button ariaLabel="Locked" variant="primary" onClick={jest.fn()}>
          <Lock color="primary.500" />>
        </Button>
      </Theme>
    );
    expect(element.find('button[aria-label]').prop('aria-label')).toEqual('Locked');
  });

  it('should pass through any properties starting with "data-" to the button element', () => {
    const dataKey = 'data-test';
    const dataValue = '12345';
    render({ 'data-test': dataValue });

    expect(button.props()[dataKey]).toEqual(dataValue);
  });

  it('should not pass through unrelated properties', () => {
    const fakeKey = 'fake-data';
    render({ fakeKey: 'doesnt exist' });

    expect(button.props()[fakeKey]).toEqual(undefined);
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
