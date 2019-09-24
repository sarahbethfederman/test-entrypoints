import * as React from 'react';
import { mount } from 'enzyme';
import Theme, { Colors, theme } from '@lendi-ui/theme';
import { color as getColor } from '@lendi-ui/color';
import { Heading, HeadingSize, HeadingAlignment } from '../index';
import { deriveSize } from '@lendi-ui/utils';

const sizes: HeadingSize[] = ['xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
const colors: Colors[] = ['primary.500', 'shade.0', 'shade.1000'];
const alignments: HeadingAlignment[] = ['left', 'center', 'right', 'justify'];

let wrapper;
const render = (props) => {
  wrapper = mount(
    <Theme>
      <Heading {...props} />
    </Theme>
  );
};

describe('Heading', () => {
  sizes.forEach((size, index) => {
    it(`should render styles for size "${size}"`, () => {
      render({ size });
      expect(wrapper.find(Heading)).toMatchSnapshot();
    });

    it(`should render tag for size "${size}"`, () => {
      render({ size });
      expect(wrapper.find(Heading).find(`h${index + 1}`)).toHaveLength(1);
    });
  });

  colors.forEach((color) => {
    it(`should render styles for color "${color}"`, () => {
      render({ size: 'xl', color });
      expect(wrapper.find(Heading)).toHaveStyleRule('color', color && getColor(color)({ theme }));
    });
  });

  alignments.forEach((alignment) => {
    it(`should render styles for align ${alignment}`, () => {
      render({ size: 'xl', align: `${alignment}` });
      expect(wrapper.find(Heading)).toHaveStyleRule('text-align', `${alignment}`);
    });
  });

  it('should render styles for margin', () => {
    render({ size: 'xl', m: 'md' });
    expect(wrapper.find(Heading)).toHaveStyleRule('margin', `${deriveSize(1.5)}`);
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = wrapper.find(Heading).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, itemId', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        itemID: 'itemId',
      });
      const attributes = wrapper.find(Heading).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes['itemID']).toBe('itemId');
    });
  });
});
