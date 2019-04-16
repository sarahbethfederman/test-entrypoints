import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Input } from './index';
import { InputSize, InputWrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';
import { color } from '@lendi-ui/color';

const sizes: InputSize[] = ['lg', 'md', 'sm'];

let element;

function render(props) {
  element = mount(
    <Theme>
      <Input value={props.value} placeholder="input here ..." onChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('input', () => {
  it('it should render the whole input component and a text input', () => {
    render({});
    expect(element.find(Layout).length).toEqual(1);
    expect(element.find(Layout)).not.toHaveStyleRule('width', '100%');
    expect(element.find(InputWrapper).length).toEqual(1);
    expect(element.find(BeforeWrapper).length).toEqual(0);
    expect(element.find(AfterWrapper).length).toEqual(0);
    expect(element).toMatchSnapshot();
  });

  it('it should render the before component when there is a before element', () => {
    const before = <span style={{ width: '24px', height: '24px' }}>x</span>;
    render({ before });
    expect(element.find(BeforeWrapper).length).toEqual(1);
  });

  it('it should render the after component when there is a after element', () => {
    const after = <span style={{ width: '24px', height: '24px' }}>x</span>;
    render({ after });
    expect(element.find(AfterWrapper).length).toEqual(1);
  });

  describe('variations of the text input in all given sizes', () => {
    sizes.forEach((size) => {
      describe(`${size}`, () => {
        it('should render 100% width of with isFullWidth prop', () => {
          const isFullWidth = true;
          render({ isFullWidth });
          expect(element.find(Layout)).toHaveStyleRule('width', '100%');
          expect(element.find(Layout)).toMatchSnapshot();
        });

        it('should render the component in a disabled state with the isDisabled prop', () => {
          const isDisabled = true;
          render({ isDisabled });
          expect(element.find(Layout)).toHaveStyleRule(`'background-color', ${color('shade.25')}`);
          expect(element.find(Layout)).toMatchSnapshot();
        });

        it('should render the component with a white border and transparent background if the isInverse prop is true', () => {
          const isInverse = true;
          render({ isInverse });
          expect(element.find(Layout)).toHaveStyleRule('background-color', 'transparent');
          expect(element.find(Layout)).toHaveStyleRule(`'border', '1px solid ${color('shade.25')}'`);
          expect(element.find(Layout)).toMatchSnapshot();
        });

        it('should render the component with a red border if the isError state is true', () => {
          const isError = true;
          render({ isError });
          expect(element.find(Layout)).toHaveStyleRule(`'border', '1px solid ${color('warn.500')}`);
          expect(element.find(Layout)).toMatchSnapshot();
        });
      });
    });
  });
  it('should be able to passed down other input attributes', () => {
    const inputProps = {
      autoFocus: true,
      autoComplete: 'on',
      tabIndex: 0,
    };
    render(inputProps);
    const InputElement = element.find(InputWrapper);
    expect(InputElement.props().autoFocus).toBe(true);
    expect(InputElement.props().autoComplete).toBe('on');
    expect(InputElement.props().tabIndex).toBe(0);
  });

  it('should pass down Input inputSize prop as the input html size attribute', () => {
    const inputSize = 3;
    const size = 'md';
    render({ inputSize, size });
    const InputElement = element.find(InputWrapper);
    const LayoutElement = element.find(Layout);
    expect(InputElement.props().size).toBe(inputSize);
    expect(InputElement.props().fontSize).toBe(size);
    expect(LayoutElement.props().size).toBe(size);
  });
});
