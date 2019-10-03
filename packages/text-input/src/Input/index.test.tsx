import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Input, supportedTypes } from './index';
import { InputSize, InputWrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';
import { color } from '@lendi-ui/color';

const sizes: InputSize[] = ['lg', 'md', 'sm', 'xs'];
let element;

function render(props) {
  element = mount(
    <Theme>
      <Input value={props.value} placeholder="input here ..." onChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('input', () => {
  it('should render the whole input component and a text input', () => {
    render({});
    expect(element.find(Layout).length).toEqual(1);
    expect(element.find(Layout)).not.toHaveStyleRule('width', '100%');
    expect(element.find(InputWrapper).length).toEqual(1);
    expect(element.find(BeforeWrapper).length).toEqual(0);
    expect(element.find(AfterWrapper).length).toEqual(0);
    expect(element).toMatchSnapshot();
  });

  it('should render the before component when there is a before element', () => {
    const before = <span style={{ width: '24px', height: '24px' }}>x</span>;
    render({ before });
    expect(element.find(BeforeWrapper).length).toEqual(1);
  });

  it('should render the after component when there is a after element', () => {
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

        it('should not render 100% width when fullwidth is false', () => {
          const isFullWidth = false;
          render({ isFullWidth });
          expect(element.find(Layout)).not.toHaveStyleRule('width', '100%');
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

  it('should take the autoComplete prop', () => {
    const inputProps = {
      autoComplete: 'on',
    };
    render(inputProps);
    const InputElement = element.find(InputWrapper);
    expect(InputElement.props().autoComplete).toBe('on');
  });

  it('should take the isAutoFocus prop', () => {
    const inputProps = {
      isAutoFocus: true,
    };
    render(inputProps);
    const InputElement = element.find('input');
    expect(InputElement).toHaveStyleRule("outline: '5px auto -webkit-focus-ring-color'");
  });

  it('should take the isRequired prop', () => {
    const inputProps = {
      isRequired: true,
    };
    render(inputProps);
    const InputElement = element.find('input');
    expect(InputElement.props().required).toBe(true);
  });

  it('should take the isReadOnly prop', () => {
    const inputProps = {
      isReadOnly: true,
    };
    render(inputProps);
    const InputElement = element.find('input');
    expect(InputElement.props().readOnly).toBe(true);
  });

  it('should take the tabIndex prop', () => {
    const inputProps = {
      tabIndex: 0,
    };
    render(inputProps);
    const InputElement = element.find(InputWrapper);
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

  describe('should render as different input types', () => {
    supportedTypes.forEach((type: string) => {
      it(`should render as ${type}`, () => {
        render({ type: `${type}` });
        expect(element.find('input').props().type).toEqual(`${type}`);
      });
    });
  });

  describe('should fall back to `text` type if provide type is not supported', () => {
    ['asdasdasd', 'password', 'radio', 'checkbox', ''].forEach((type: string) => {
      it(`should render as ${type}`, () => {
        render({ type: `${type}` });
        expect(element.find('input').props().type).toEqual('text');
      });
    });
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = element.find('input').props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemRef', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemRef: 'ref',
      });
      const attributes = element.find('input').props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.itemRef).toBe('ref');
    });
  });
});
