import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import TextArea from './index';
import { Size, TextAreaWrapper } from './index.style';
import { color } from '@lendi-ui/color';

const sizes: Size[] = ['lg', 'md', 'sm'];

let element;

function render(props) {
  element = mount(
    <Theme>
      <TextArea value={props.value} placeholder="input here ..." onChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('Text area', () => {
  it('should render the text area component', () => {
    render({});
    expect(element.find(TextArea)).toHaveLength(1);
    expect(element.find(TextArea)).toMatchSnapshot();
    expect(element.find(TextAreaWrapper)).toHaveLength(1);
  });

  describe('variations of the text area in all given sizes', () => {
    sizes.forEach((size) => {
      describe(`${size}`, () => {
        it('should render 100% width of with isFullWidth prop', () => {
          const isFullWidth = true;
          render({ isFullWidth });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule('width', '100%');
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should render the component in a disabled state with the isDisabled prop', () => {
          const isDisabled = true;
          render({ isDisabled });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'background-color', ${color('shade.25')}`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should render the component with a white border and transparent background if the isInverse prop is true', () => {
          const isInverse = true;
          render({ isInverse });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule('background-color', 'transparent');
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'border', '1px solid ${color('shade.25')}'`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should render the component with a red border if the isError state is true', () => {
          const isError = true;
          render({ isError });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'border', '1px solid ${color('warn.500')}`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });
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
      const attributes = element.find('textarea').props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        tabIndex: 1,
      });
      const attributes = element.find('textarea').props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.tabIndex).toBe(1);
    });
  });
});
